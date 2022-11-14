import React, { useContext, useEffect } from 'react'
import { themeContext } from '../contexs/ThemeProvider';
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';
import cookies from 'react-cookies';
import '../App.css';
import { Stack  } from '@chakra-ui/react';

function Login() {
  const { mode, setMode } = useContext(themeContext);

  useEffect(() => {
    setMode(cookies.load("mode"));
  }, []);

  return (
    <Stack className='he'>
      <Stack  >
        <h1 className='welcome'>Welcome to Fawzi Shiyyab White Board</h1>
       
      </Stack>
      <Stack >
        <SigninForm />
        <SignupForm />
      </Stack>
    </Stack >
  )
}

export default Login