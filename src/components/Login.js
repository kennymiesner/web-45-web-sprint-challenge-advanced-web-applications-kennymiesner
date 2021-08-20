import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import axiosWithAuth from '../helpers/axiosWithAuth'

const Login = () => {
  // Make a post request to retrieve a token from the api
  // When you have handled the token, navigate to the BubblePage route

  const initialValues = {
    username: '',
    password: ''
  }

  const [credentials, setCredentials] = useState(initialValues)
  const [error, setError] = useState('')
  const history = useHistory()

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = e => {
    e.preventDefault()
    axiosWithAuth()
      .post('/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        history.push('/bubbles')
      })
      .catch(err => {
        setError('Incorrect username or password.')
      })
  }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={handleLogin}>
          <label>Username:</label>
          <input 
            type='text'
            name='username'
            id='username'
            value={credentials.username}
            onChange={handleChange}
          />
          <label>Password:</label>
          <input 
            type='text'
            name='password'
            id='password'
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>

      <p id="error" className="error">{error}</p>
    </div>
  );
};

export default Login;

/*
  Task List:
  1. Build a form containing a username and password field.
  2. Add whatever state necessary for form functioning.
  4. If either the username or password is not entered, display the following words with the p tag provided: 
     Username or Password not valid.
  5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect 
     to a BubblePage route.
  6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
  7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
  8. MAKE SURE YOUR ERROR p tag contains the id="error"
*/