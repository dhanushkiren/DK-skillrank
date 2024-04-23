import json

with open('Assessment-2/ex5.json') as file:
    ex5 = json.load(file)

# print(ex5)
for name in ex5:
    if name['name'] == 'Old Fashioned':
        # print(name['batters']['batter'])
        name['batters']['batter'].append({"id":"1003", "type":"Tea"})
        break

# print(ex5[2])
with open('Assessment-2/ex5.json','w') as edit_file:
    json.dump(ex5,edit_file,indent=2)

print("ex5.json file updated")
