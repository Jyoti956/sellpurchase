import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import { useHistory,Redirect} from "react-router-dom";


export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [newUsers, setNewUsers] = useState([]);
  const [oldUsers, setOldUsers] = useState([]);
  const [userFound,setUserFound]=useState(false);
  let history = useHistory();

  useEffect(()=>{
    const oldData = JSON.parse(localStorage.getItem('newUsers'));
    if(oldData){
    setOldUsers(oldData);
    console.log(oldUsers,"oldUsers are here");
    console.log(newUsers,"newUsers are here");
    }
  },[]);
  
 useEffect(() => localStorage.setItem("newUsers", JSON.stringify(newUsers)), [newUsers]);
  

  const saveCreds=()=>{
    if(userName && password){
      newUsers.push({ username: userName, password: password });
      setNewUsers([...newUsers],{userName,password}) ;
      history.push("/dashboard");
      alert(userName + "You are Logged In successfully");
      console.log(newUsers);
    }
  }
  
  const handleLogin=(e)=> {
      e.preventDefault();
      if (oldUsers && userName && password) {
      let result = oldUsers.find(user => {return user.username === userName && user.password===password});
      console.log(result);
      
      {result ? alert(userName + " " +"Logged in Successfully") && <Redirect to="/dashboard"/>:saveCreds()}
    }
 }
  return (
    <div className='login'>
      <h1>Login Here</h1>
      <div className="Login">
        <form onSubmit={handleLogin}>
            Username:
            <input
              autoFocus
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="inputs" required/>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="inputs" required/>
          
          <Button block size="lg" type="submit">
            Login
        </Button>
        </form>
      </div>
    </div>
  );
}