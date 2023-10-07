import React from 'react';
import CustomButton from './components/CustomButton/CustomButton';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import UsersView from './pages/UsersView';
import About from './pages/About';
import UserSingle from './components/Users/UserSingle';

function App() {
  return (
    <div className="App">
      {/* <CustomButton /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<UsersView />} />

          <Route path="/users/:userId" element={<UserSingle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
