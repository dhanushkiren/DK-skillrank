from flask import Flask, request, jsonify
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import bcrypt

app = Flask(__name__)

MONGO_URI = "mongodb+srv://dk-megatron:2k-dk-megatron@dk-cluster.pqsh2ex.mongodb.net/?retryWrites=true&w=majority&appName=dk-cluster"

client = MongoClient(MONGO_URI,server_api=ServerApi('1'))

db = client["Flask-db"]
collection = db["users"]

try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)



@app.route("/login", methods=["POST"])
def login():
    data = request.json

    user = collection.find_one({"username": data["username"]})

    if user:
        if bcrypt.checkpw(data["password"].encode("utf-8"), user["password"]):
            return jsonify({"message": "Login successful"}), 200
        else:
            return jsonify({"message": "Invalid password"}), 401
    else:
        return jsonify({"message": "User not found"}), 404


@app.route("/signup", methods=["POST"])
def add_user():
    data = request.json
    hashed_password = bcrypt.hashpw(data["password"].encode("utf-8"), bcrypt.gensalt())
    data["password"] = hashed_password

    existing_user = collection.find_one({"username": data["username"]})
    
    if existing_user:
        return jsonify({"message": "Username already exists"}), 409
    
    result = collection.insert_one(data)

    if result.inserted_id:
        return jsonify({"message": "Data added successfully"}), 201
    else:
        return jsonify({"message": "Failed to add data"}), 500
    



if __name__ == "__main__":
    app.run(debug=True)