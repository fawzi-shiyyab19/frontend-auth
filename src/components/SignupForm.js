import React from 'react';
import axios from 'axios';
import { Input,useColorMode  } from '@chakra-ui/react';

function SignupForm() {
  const { colorMode } = useColorMode();

  async function signUp(e) {
    e.preventDefault();
    if (e.target.confirmPassword.value !== e.target.passwordsu.value) {
      alert(`Password doesn't match`)
    } else {
      const url = `${process.env.REACT_APP_SERVER}/signup`;
      const user = {
        username: e.target.usernamesu.value,
        email: e.target.email.value,
        password: e.target.confirmPassword.value
      };
      const addedUser = await axios.post(url, user);
      console.log(addedUser.data);
    }
  }

  return (
    <form onSubmit={signUp}>
      <fieldset className='fs'>
        <legend>Sign Up</legend>
        <Input type='text' className='formField' placeholder='Username' id='usernamesu' required bg={colorMode === "light" ? "input.100" : "input.900"}
                        border="2px"
                        borderColor="red.300"
                        rounded="md"></Input>
        <Input type='text' className='formField' placeholder='E-mail' id='email' required bg={colorMode === "light" ? "input.100" : "input.900"}
                        border="2px"
                        borderColor="red.300"
                        rounded="md"></Input>
        <Input type='password' className='formField' placeholder='Password' id='passwordsu' required bg={colorMode === "light" ? "input.100" : "input.900"}
                        border="2px"
                        borderColor="red.300"
                        rounded="md"></Input>
        <Input type='password' className='formField' placeholder='Confirm Password' id='confirmPassword' required autoComplete='off' bg={colorMode === "light" ? "input.100" : "input.900"}
                        border="2px"
                        borderColor="red.300"
                        rounded="md"></Input>
        <input type='submit' className='button' value='signUp' ></input>
      </fieldset>
    </form>
  )
}

export default SignupForm