import React, { useState } from "react";
import { InputLabel, TextField, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./SignUp.css";

function SignUp() {

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetFields = () => {
    setName("");
    setUsername("");
    setEmail("");
    setPassword("");
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, username, email, password}),
      });
      const data = await response.json();
      resetFields();
      alert(data.message);
  };

  return (
    <Box className="container">
      <p className="heading">Signup</p>
      <form onSubmit={handleSubmit} className="">
        <div className="input-container">
          <InputLabel htmlFor="Name">Name</InputLabel>
          <TextField
            variant="outlined"
            id="name"
            type="text"
            InputProps={{ required: true }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <InputLabel htmlFor="username">Username</InputLabel>
          <TextField
            variant="outlined"
            id="username"
            type="text"
            InputProps={{ required: true }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container">
          <InputLabel htmlFor="email">Email</InputLabel>
          <TextField
            variant="outlined"
            id="email"
            type="email"
            InputProps={{ required: true }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <InputLabel htmlFor="password">Password</InputLabel>
          <TextField
            variant="outlined"
            id="password"
            type="password"
            InputProps={{ required: true }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button variant="outlined" color="primary" type="submit">
          SignUp
        </Button>
        <p>
          Already have an account?{" "}
          <Link to="/">
            <Button>Login</Button>
          </Link>
        </p>
      </form>
    </Box>
  );
}

export default SignUp;
