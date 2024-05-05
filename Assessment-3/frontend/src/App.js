import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NotFound from "./components/NotFound";
import './App.css';

function App() {
  return (
    <div className="app">
    <Router>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/signup" Component={SignUp} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
