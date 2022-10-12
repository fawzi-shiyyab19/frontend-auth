import React, { useState } from 'react'
import cookies from 'react-cookies';


export const AuthContext = React.createContext();


function AuthProvider(props) {
  const [isLogged, setIsLogged] = useState(() => false);



  const cab = cookies.load("capabilities");

  function canDo(capability){
      return (cab?.includes(capability))
  }
  
  const AuthContextData = { isLogged, setIsLogged, canDo };


  return (
    <AuthContext.Provider value={AuthContextData}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider