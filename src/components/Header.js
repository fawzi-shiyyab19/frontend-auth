import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { themeContext } from '../contexs/ThemeProvider';
import { AuthContext } from '../contexs/AuthProvider';
import cookies from "react-cookies";
import { actions } from '../reducers/actionTypes';
import { HStack,Button ,useColorMode,Text } from '@chakra-ui/react';

function Header() {

  const theme_Context = useContext(themeContext);
 // const { isLogged, setIsLogged } = useContext(AuthContext);
  const { state, dispatch } = useContext(AuthContext)
  const { colorMode } = useColorMode();

  function logOut() {
    cookies.remove('token');
    cookies.remove('username');
    cookies.remove('_id');
    cookies.remove('capabilities');
    cookies.remove('role');
    dispatch({type:actions.Login_notSuccess })
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
      <HStack className='lo' padding={3} bg={colorMode === "light" ? "authButton.100" : "authButton.900"}
                        w="100vw"
                        p={4}
                        pt={2}
                        rounded="md"
                        shadow="md" >
        {state.isLogged && <Button to="/" >Main</Button>}
        {state.isLogged && <Button to="/login"  onClick={logOut}>Logout</Button>}
        {state.isLogged && <Text>Welcome {cookies.load('username')}</Text>}
 </HStack>
    </nav>
  )
}

export default Header