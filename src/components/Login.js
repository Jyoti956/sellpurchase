import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory,Link,Redirect} from "react-router-dom";


export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null)
  const [newUsers, setNewUsers] = useState([]);
  const [oldUsers, setOldUsers] = useState([]);
  const [userFound,setUserFound]=useState(false);
  let history = useHistory();

  useEffect(() => localStorage.setItem("newUsers", JSON.stringify(newUsers)), [newUsers]);

  useEffect(()=>{
    finduser();
  })

  const finduser=()=>{
    const oldUsers = JSON.parse(localStorage.getItem('newUsers'));
    if(oldUsers){
    setOldUsers(oldUsers);
    
    console.log(oldUsers);
    for(let i=0; i<=oldUsers.length; i++){
    if(oldUsers[i].userName===newUsers.userName && oldUsers[i].password===newUsers.password){
      setUserFound(true);
      // history.push('/dashboard');
      <Redirect to='/dashboard'/>
    }
  }
  }
}
function validateForm() {
    if (!userName) {
      setError("Please enter your Username");
      return false;
    }
    if (!password) {
      setError("Please enter your Password");
      return false;
    }
  }

  function handleLogin(e) {
    e.preventDefault();
    if (userName && password) {
      newUsers.push({ userName: userName, password: password })
      setNewUsers([...newUsers]);
      
    }
  //   if(userFound){
  //     return  <Redirect  to="/dashboard" />
  // }
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
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="inputs" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="inputs" />
          </Form.Group>
          <Button block size="lg" type="button" >
            Login
        </Button>
        </Form>
      </div>
    </div>
  );
}