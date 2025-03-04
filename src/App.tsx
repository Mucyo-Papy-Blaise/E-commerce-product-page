import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import NavBar from './pages/NavBar';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element = {<Home/>}/>
      </Routes>
    </Router>
  );
};

export default App;
