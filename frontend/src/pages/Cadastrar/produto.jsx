import React from 'react';
import logo from '../../assets/logoG.svg'; 
import Form from '../../components/comp/Form'; 

export default function Produto() {
   

  return (
    <div className="min-h-screen bg-[#c9c9f7] flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-md w-full max-w-3xl p-8 md:p-12">
        
        <div className="flex items-center space-x-4 mb-8">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold text-[#003366]">GeladinhoPro</h1>
        </div>

        <form className="flex flex-col space-y-6">
          <Form
            label="Nome do Produto"
            placeholder="Digite o nome"
            id="sabor"
            name="sabor"
          />
          <Form
            label="Quantidade"
            type="number"
            placeholder="0"
            id="quantidade"
            name="quantidade"
          />
          <Form
            label="Preço"
            placeholder="R$"
            id="preco"
            name="preco"
          />
          <button
            type="submit" 
            className="bg-[#003366] text-white font-semibold py-2 rounded-xl hover:bg-[#002244] transition duration-300"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
