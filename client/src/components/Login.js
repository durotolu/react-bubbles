import React, {useState} from "react";
import axios from 'axios'

const initialLoginForm = {
  username: '',
  password: '',
};

const Login = () => {
  // make a post request to retrieve a token from the api
  const [loginForm, setLoginForm] = useState(initialLoginForm);

  const onFormInput = e => {
    setLoginForm({...loginForm, [e.target.id]: e.target.value});
  }

  const onLogin = (e) => {
    e.preventDefault()
    debugger
    axios.post('http://localhost:5000/api/login', loginForm)
      .then(res => {
        console.log(res)
        debugger
        localStorage.setItem('token', res.data.payload)
        //props.history.push('/friends')
      })
      .catch(err => {
        alert(err.message)
      })
    setLoginForm(initialLoginForm);
  }

  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      {/* <button className='logout' onClick={onLogout} >Log Out</button> */}
      <form onSubmit={onLogin}>
        <div>
          <label>Username
            <input onChange={onFormInput} value={loginForm.username} id='username' type='text' name='username' />
          </label>
        </div>
        <div>
          <label>Password
            <input onChange={onFormInput} value={loginForm.password} id='password' type='text' name='password' />
          </label>
        </div>
        <button>Log In</button>
      </form>
    </>
  );
};

export default Login;
