import React, { useContext, useEffect } from 'react'
import { themeContext } from '../contexs/ThemeProvider';
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';
import cookies from 'react-cookies';
import '../App.css';

function Login() {
  const { mode, setMode } = useContext(themeContext);

  useEffect(() => {
    setMode(cookies.load("mode"));
  }, []);

  return (
    <div className='he'>
      <div  >
        <h1 className='welcome'>Welcome to Fawzi Shiyyab White Board</h1>
       
      </div>
      <div >
        <SigninForm />
        <SignupForm />
      </div>
    </div >
  )
}

export default Login