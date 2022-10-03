import React, { useContext } from 'react';
import '../App.css';
import { themeContext } from '../contexs/ThemeProvider';

function Footer() {
  const theme_Context = useContext(themeContext);

  return (
    <div className='fo'>
      <p className='pa'>Shiyyab All right reserved 2022</p>
    </div >
  )
}

export default Footer