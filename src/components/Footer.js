import React, { useContext } from 'react';
import '../App.css';
import { themeContext } from '../contexs/ThemeProvider';
import { Text,Stack } from '@chakra-ui/react';

function Footer() {
  const theme_Context = useContext(themeContext);

  return (
    <Stack className='fo'>
      <Text className='pa'>Shiyyab All right reserved 2022</Text>

      
    </Stack >
  )
}

export default Footer