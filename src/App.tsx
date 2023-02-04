import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import UserForm from './Component/UserForm';
import UserList from './Component/UserList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/create-user" element={<UserForm />} />
          <Route path="user/:id" element={<UserForm isUpdateForm={true} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
