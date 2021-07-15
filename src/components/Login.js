import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useHistory} from "react-router-dom";



export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [newUsers, setNewUsers] = useState([]);
  const [oldUsers, setOldUsers] = useState([]);
  let history = useHistory();

  
  useEffect(() => {
    const oldData = JSON.parse(localStorage.getItem('newUsers'));
    if (oldData) {
      setOldUsers(oldData);
      console.log(oldUsers, "oldUsers are here");
      console.log(newUsers, "newUsers are here");
    }
  }, []);

  
const saveCreds = () => {
    if(userName && password){
    newUsers.push({ username: userName, password: password });
    setNewUsers([...newUsers, { userName, password }]);
    localStorage.setItem("newUsers",JSON.stringify(newUsers))
    history.push("/dashboard")
    alert(userName + "," + "You are New user")
    console.log(newUsers);
  }
  }

  useEffect(() => localStorage.setItem("newUsers", JSON.stringify(newUsers)),[newUsers]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (oldUsers) {
      let result = oldUsers.find(user => user.username === userName && user.password === password );
      { result ? alert(userName + "," + "You are old user") && history.push("/dashboard") : saveCreds() }
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
            className="inputs" required />
          Password:
            <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="inputs" required />

          <Button block size="lg" type="submit">
            Login
        </Button>
        </form>
      </div>
    </div>
  );
}