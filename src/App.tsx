import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/container';

import AppNavbar from './components/appNavbar/appNavbar';
import AppDropzone from './components/AppDropzone/AppDropzone';
import AppHero from './components/AppHero/AppHero';
import { AuthProvider, RequireAuth} from './contexts/AuthContext';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login';



function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={
            <RequireAuth>
              <Dashboard/>
            </RequireAuth>
          } />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
