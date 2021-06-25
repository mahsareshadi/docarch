import React, { useState } from "react";
import "../css/login.css";
import { Link } from 'react-router-dom';
import { getUser } from '../api/index';






function LoginForm({ setUserinfo }: any) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");




  return (
    <>
      <div id="border" >
        <h1 id="login-h1">Login</h1>
        <form id="form-style">
          <input className="login-input" type="text" placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input className="login-input" type="password" placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Link to='/inbox'>
            <button type="submit" id="btn"
             onClick={() => getUser(username, password).then((response)=>setUserinfo(response))}>
               Login</button>
          </Link>
        </form>


      </div>
    </>
  )
}
export default LoginForm;