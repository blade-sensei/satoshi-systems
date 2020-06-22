import React, { useEffect, useState } from "react";


const Login = (props) => {

  const [username, setUsername] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [redirection, setRedirection] = useState(false);

  const login = async () => {
    console.log('send post');
    const credentials = {
      name: username,
      password: userPassword,
    }
    let apiResponse = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    console.log(apiResponse);
    //apiResponse = await apiResponse.json();
    apiResponse.loginSucess = true;
    
    const user = apiResponse.user;
    if (apiResponse.loginSucess) {
        return props.history.push("/data-view", user);
    }
    //todo redirection to data-view
  };

  return (
    <div>
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
        <button type="button" className="btn-sign-in" onClick={login}>
          Login
        </button>
      </div>
    </div>

    </div>
  )
}

export default Login
