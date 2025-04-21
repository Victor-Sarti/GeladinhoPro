import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Login from './pages/Login/login.jsx'
import Navbar from './components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </Router>
  </StrictMode>,
);