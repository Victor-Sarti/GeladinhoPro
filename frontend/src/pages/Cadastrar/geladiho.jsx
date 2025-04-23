import React, { useState } from 'react';
import logo from '../../assets/logoG.svg';
import Form from '../../components/comp/Form';
import { geladinhoSchema } from '../../../../backend/src/types/typeGeladinho'; // Ajuste o caminho se necessário

export default function Geladinho() {
  const [formData, setFormData] = useState({
    sabor: '',
    quantidade: '',
    valor: '', // importante para bater com o schema
  });

  const [mensagem, setMensagem] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const dadosValidados = geladinhoSchema.parse({
      sabor: formData.sabor,
      quantidade: parseInt(formData.quantidade),
      valor: parseFloat(formData.valor),
    });

    // Pegando o token do localStorage
    const token = localStorage.getItem('token');
    console.log("Token enviado:", token); 

    if (!token) {
      setMensagem("Você precisa estar logado.");
      return;
    }

    // Envio
    const response = await fetch('http://localhost:5000/geladinho', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Usando o token
      },
      body: JSON.stringify(dadosValidados),
    });

    if (!response.ok) throw new Error('Erro ao cadastrar geladinho');

    setMensagem("Geladinho cadastrado com sucesso!");
    setFormData({ sabor: '', quantidade: '', valor: '' });
  } catch (error) {
    if (error.errors) {
      setMensagem("Preencha os campos corretamente.");
    } else {
      setMensagem(error.message || 'Erro desconhecido');
    }
  }
};

  return (
    <div className="min-h-screen bg-[#c9c9f7] flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-md w-full max-w-3xl p-8 md:p-12">
        <div className="flex items-center space-x-4 mb-8">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold text-[#003366]">GeladinhoPro</h1>
        </div>

        <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
          <Form
            label="Sabor do Geladinho"
            placeholder="Digite o sabor"
            id="sabor"
            name="sabor"
            value={formData.sabor}
            onChange={handleChange}
          />
          <Form
            label="Quantidade"
            type="number"
            placeholder="0"
            id="quantidade"
            name="quantidade"
            value={formData.quantidade}
            onChange={handleChange}
          />
          <Form
            label="Preço"
            placeholder="R$"
            id="valor"
            name="valor"
            value={formData.valor}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-[#003366] text-white font-semibold py-2 rounded-xl hover:bg-[#002244] transition duration-300"
          >
            Cadastrar
          </button>
          {mensagem && (
            <p className="text-center text-sm text-gray-700 mt-2">{mensagem}</p>
          )}
        </form>
      </div>
    </div>
  );
}
