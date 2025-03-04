import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import NavBar from './pages/NavBar';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<NavBar/>}/>
      </Routes>
    </Router>
  );
};

export default App;
