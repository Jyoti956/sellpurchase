import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";


export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null)
  const [user, setUser] = useState([])

  useEffect(() => localStorage.setItem("user", JSON.stringify(user)), [user]);

  function validateForm() {
    if (!userName) {
      setError("Please enter your Username");
      return false;
    }
    if (password) {
      setError("Please enter your Password");
      return false;
    }
  }

  function handleLogin(e) {
    e.preventDefault();
    if (userName !== "" && password !== "") {
      user.push({ username: userName, password })
      setUser([...user]);
    }
    else {
      validateForm();
    }
  }
  return (
    <div className='login'>
      <h1>Login Here</h1>
      {error && <div className="error">****{error}</div>}
      <div className="Login">
        <Form onSubmit={handleLogin}>
          <Form.Group>
            <Form.Label>Username:</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              name="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="inputs" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="inputs" />
          </Form.Group>
          <Button block size="lg" type="submit" >
            Login
        </Button>
        </Form>
      </div>
    </div>
  );
}