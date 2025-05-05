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
import PrivateRoute from './components/PrivateRoutes/PrivateRoute.jsx';
import RelatorioPa from './pages/RelatorioPa/RelatorioPa.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />

        {/* Rotas protegidas */}
        <Route
          path="/menu"
          element={
            <PrivateRoute>
              <Menu />
            </PrivateRoute>
          }
        />
        <Route
          path="/cadastrargeladinho"
          element={
            <PrivateRoute>
              <CadGeladinho />
            </PrivateRoute>
          }
        />
        <Route
          path="/cadastrarproduto"
          element={
            <PrivateRoute>
              <CadProduto />
            </PrivateRoute>
          }
        />
        <Route
          path="/estoqueGeladinho"
          element={
            <PrivateRoute>
              <Estoque />
            </PrivateRoute>
          }
        />
        <Route
          path="/estoqueProduto"
          element={
            <PrivateRoute>
              <EstoqueP />
            </PrivateRoute>
          }
        />
        <Route
          path="/relatorio"
          element={
            <PrivateRoute>
              < RelatorioPa />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  </StrictMode>,
);