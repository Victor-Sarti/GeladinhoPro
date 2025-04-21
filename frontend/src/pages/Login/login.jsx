import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../../components/comp/Form';
import logo from '../../assets/logoG.svg';

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificação das credenciais de admin
    if (email === "admin@admin.com" && password === "admin123") {
      setError('');
      navigate('/menu');
    } else {
      setError('Email ou senha incorretos!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#b3b3ff] px-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Lado esquerdo */}
        <div className="w-full md:w-1/2 bg-[#d3d3fb] flex flex-col items-center justify-center p-8">
          <img
            src={logo}
            alt="Logo"
            className="w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-6"
          />
          <h1 className="text-xl md:text-2xl font-bold text-[#003366]">GeladinhoPro</h1>
          <p className="text-[#003366] mt-2 text-sm text-center">
            Controle total, sabor na gestão
          </p>
        </div>

        {/* Lado direito */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-10">
          <h2 className="text-xl md:text-2xl font-bold text-[#003366] mb-6 md:mb-8">Bem-Vindo de Volta!</h2>

          <form className="flex flex-col space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <Form
              label="Email:"
              type="email"
              placeholder="Digite seu email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form
              label="Senha:"
              type="password"
              placeholder="Digite sua senha"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <p className="text-red-600 text-sm font-medium">{error}</p>
            )}
            <button
              type="submit"
              className="bg-[#003366] text-white font-semibold py-2 rounded-lg hover:bg-[#002244] transition duration-300"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
