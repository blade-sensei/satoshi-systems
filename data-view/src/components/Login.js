import React, { useState } from "react";
import NavBar from '../components/NavBar';
import DataView from '../components/DataView';
import './Login.css';

const Login = (props) => {

  const [username, setUsername] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [loginSucess, setLoginSucess] = useState(false);
  const [user, setUser] = useState({});

  const login = async () => {
    const credentials = {
      name: username,
      password: userPassword,
    }
    let apiResponse = await fetch('http://52.146.54.126/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    apiResponse = await apiResponse.json();
    const user = apiResponse.user;
    setUser(user);
    if (apiResponse.loginSucess) {
      setLoginSucess(true);
    } else {
      setLoginError(true);
    }
    //todo redirection to data-view
  };
  const form = () => {
    return (
    <div className="login-container component">
    { loginError && <span class="form-error"> login fail </span> }
      <span className="form-title"> Log in </span>
  <div>
    <div className="form-set">
      <label for="username">username</label>
      <input type="text" id="username" className="form-field"
      value={username} onChange=  { e =>  setUsername(e.target.value) } autofocus/>
    </div>
    <div className="form-set">
      <label for="password">password</label>
      <input type="password" id="password" className="form-field"
      value={userPassword} onChange=  { e =>  setUserPassword(e.target.value) }/>
    </div>
    <div className="form-set">
      <a type="button" className="btn-sign-in" onClick={login}>Login </a>
    </div>
  </div>
  </div>
    )
  }

  const dataview = () => {
    return (<DataView user={user}/>)
  }
  return (
    
    <div>
      <NavBar/>
      { !loginSucess && form() } 
      { loginSucess && dataview() } 
      
    </div>
    
  )
}

export default Login
