import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logoG.svg';



export default function Menu() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#d3d3fb] flex flex-col items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-2xl p-8 flex flex-col items-center">
        <img src={logo} alt="Logo" className="w-16 h-16 mb-4" />
        <h1 className="text-2xl font-bold text-[#003366] mb-8">Menu Principal</h1>

        <div className="flex flex-col gap-4 w-full">
          <button
            onClick={() => navigate('/cadastrargeladinho')}
            className="bg-[#003366] text-white py-3 rounded-lg hover:bg-[#002244] transition"
          >
            Cadastro de Geladinho
          </button>
          <button
            onClick={() => navigate('/cadastrarproduto')}
            className="bg-[#003366] text-white py-3 rounded-lg hover:bg-[#002244] transition"
          >
            Cadastro de Produto
          </button>
          <button
            onClick={() => navigate('/estoqueGeladinho')}
            className="bg-[#003366] text-white py-3 rounded-lg hover:bg-[#002244] transition"
          >
            Estoque Geladinho
          </button>
          <button
            onClick={() => navigate('/estoqueProduto')}
            className="bg-[#003366] text-white py-3 rounded-lg hover:bg-[#002244] transition"
          >
            Estoque Produto
          </button>
          <button
            onClick={() => navigate('/relatorio')}
            className="bg-[#003366] text-white py-3 rounded-lg hover:bg-[#002244] transition"
          >
            Relatórios
          </button>
        </div>
      </div>
    </div>
  );
}
