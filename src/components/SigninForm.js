import React, { useContext } from 'react';
import axios from 'axios';
import base64 from 'base-64';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../contexs/AuthProvider';
import cookies from "react-cookies";
import { actions } from '../reducers/actionTypes';
import { Input,useColorMode } from '@chakra-ui/react';

 

function SigninForm() {
  const { colorMode } = useColorMode();

  // const { isLogged, setIsLogged } = useContext(AuthContext)
  const { state, dispatch } = useContext(AuthContext)

  async function login(e) {
    e.preventDefault();
    const username = e.target.usernameli.value;
    const password = e.target.passwordli.value;
    const url = `${process.env.REACT_APP_SERVER}/signin`
    const encoded = base64.encode(`${username}:${password}`);
    const basicAuth = { headers: { authorization: `Basic ${encoded}` } };
    const axiosRespose = await axios.post(url, {}, basicAuth);
    console.log(axiosRespose.data)

    const token = axiosRespose.data.token;
    if (token) {
      cookies.save(`token`, token);
      cookies.save(`username`, axiosRespose.data.user.username);
      cookies.save(`_id`, axiosRespose.data.user._id);
      cookies.save(`role`, axiosRespose.data.user.role);
      cookies.save(`capabilities`, axiosRespose.data.user.capabilities);


      dispatch({type:actions.Login_Success })
    } else {
      alert('Login faild Enter correct Username or Password');
    }
  }


  return (
    (state.isLogged) ? <Navigate to='/' /> :
      <form onSubmit={login}>
        <fieldset className='fs'>
          <legend>Login</legend>
          <Input placeholder='medium size' size='md' type='text'  id='usernameli' required  bg={colorMode === "light" ? "input.100" : "input.900"}
                        border="2px"
                        borderColor="red.300"
                        rounded="md"></Input>
          <Input placeholder='medium size' size='md' type='password' className='formField'  id='passwordli' required autoComplete='off' bg={colorMode === "light" ? "input.100" : "input.900"}
                        border="2px"
                        borderColor="red.300"
                        rounded="md"></Input>
          <input  type='submit' className='button' value='login' autoComplete='off' ></input>
        </fieldset>
      </form>
  )
}

export default SigninForm