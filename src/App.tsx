import './index.css';
import React from 'react';
import { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import { LoginContext } from './Context/LoginContext';

const App: React.FC = () => {
  const [showHome, setShowHome] =  useState<boolean>(false)
  const [userName, setUsername] = useState<string>("")

  return (
    <div>
      <LoginContext.Provider value={{userName,setUsername,showHome,setShowHome}}>
        {showHome ? <Home /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
};

export default App;
