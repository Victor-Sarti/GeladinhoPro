import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Login from './pages/Login/login.jsx'
import Navbar from './components/Navbar.jsx'
import Menu from './pages/Menu/Menu.jsx'
import CadGeladinho from './pages/Cadastrar/geladiho.jsx'
import CadProduto from './pages/Cadastrar/produto.jsx'
import Estoque from './pages/Estoque/Geladinho.jsx'
import EstoqueP from './pages/Estoque/Produto.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Navbar /> 
      <Routes>

        <Route path="/menu" element={<Menu />} />
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/cadastrargeladinho" element={<CadGeladinho />} /> 
        <Route path="/cadastrarproduto" element={<CadProduto />} /> 
        <Route path="/estoqueGeladinho" element={<Estoque />} /> 
        <Route path="/estoqueProduto" element={<EstoqueP />} /> 

      </Routes>
    </Router>
  </StrictMode>,
);