import React, { useState } from "react";
import { InputLabel, TextField, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    console.log(data);
    setUsername("");
    setPassword("");
    alert(data.message);
  }

  return (
    <Box className="logincontainer">
      <p className="heading">Login</p>
    <form action="" onSubmit={handleSubmit} >
      <div className="input-container">
        <InputLabel htmlFor="username">Username</InputLabel>
        <TextField
          variant="outlined"
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          InputProps={{ required: true }}
        />
      </div>
      <div className="input-container">
        <InputLabel htmlFor="password">Password</InputLabel>
        <TextField
          variant="outlined"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{ required: true }}
        />
      </div>
      <Button variant="outlined" color="primary" type="submit">
        Submit
      </Button>
      </form>
      <p>
        click here to signup -
        <Link to="/signup">
          <Button>Signup</Button>
        </Link>
      </p>
    </Box>
  );
}

export default Login;
