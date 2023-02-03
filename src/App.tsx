import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import UserList from './Component/UserList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<UserList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
