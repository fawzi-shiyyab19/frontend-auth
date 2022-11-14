import React, { useEffect, useContext } from 'react';
import cookies from 'react-cookies';
import { themeContext } from '../contexs/ThemeProvider';

import { Stack ,Text} from '@chakra-ui/react';


function About() {

  const { mode, setMode } = useContext(themeContext);
  
  useEffect(() => {
    const token = cookies.load("token");
    setMode(cookies.load("mode"))
  }, []);

  return (
    <Stack>
      <Text>Hello im fawzi shiyyab and this is my assignment </Text>
    </Stack>
  )
}

export default About