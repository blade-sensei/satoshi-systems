import React, { useState } from "react";
import './Register.css';

const Register = () => {

  const [username, setUsername] = useState('');
  const [userAge, setUserAge] = useState(null);
  const [userScore, setUserScore] = useState(null);
  const [userPassword, setUserPassword] = useState('');

  const registerPost = async () => {
    const userInformation = {
      name: username,
      age: userAge,
      score: userScore,
      password: userPassword,
    }
    let apiResponse = await fetch('https://backend.eastus.cloudapp.azure.com/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInformation),
    });
    apiResponse = await apiResponse.json();
    console.log(apiResponse)
    
  };

  return (
    <div className="component">
      
      <span className="form-title"> Register </span>

     <div>
      <div className="form-set">
        <label for="username">username</label>
        <input type="text" id="username" className="form-field"
        value={username} onChange=  { e =>  setUsername(e.target.value) } autofocus/>
      </div>
      <div className="form-set">
        <label for="age">age</label>
        <input type="number" id="age" className="form-field"
        value={userAge} onChange=  { e =>  setUserAge(e.target.value) }/>
      </div>
      <div className="form-set">
        <label for="score">score</label>
        <input type="number" id="score" className="form-field"
        value={userScore} onChange=  { e =>  setUserScore(e.target.value) }/>
      </div>
      <div className="form-set">
        <label for="password">password</label>
        <input type="password" id="password" className="form-field"
         value={userPassword} onChange=  { e =>  setUserPassword(e.target.value) }/>
      </div>
      <div className="form-set">
        <a href="https://dataview.eastus.cloudapp.azure.com/" className="btn-sign-in" onClick={registerPost}>
          Sign up
        </a>
      </div>
    </div>

    </div>
  )
}

export default Register
