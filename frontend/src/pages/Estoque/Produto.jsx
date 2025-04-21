import React from "react";
import { Trash2, Plus, Search } from "lucide-react";
import logo from '../../assets/logoG.svg';

const data = Array(10).fill({
  id: "",
  nome: "",
  quantidade: "",
  preco: "",
});

export default function Geladinho() {
  return (
    <div className="min-h-screen bg-[#c9c9ff] p-4 sm:p-6 md:p-10 relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <h1 className="text-2xl font-bold text-[#1e1e1e]">GeladinhoPro</h1>
          </div>
          
          <div className="hidden sm:flex gap-2">
            <button className="bg-primary hover:bg-white text-white font-semibold hover:text-primary border-2 rounded-md px-4 py-2 duration-200 flex items-center gap-2">
              <Search className="w-4 h-4" />
              Buscar
            </button>
            <button className="bg-secondary hover:bg-white text-white font-semibold hover:text-primary border-2 rounded-md px-4 py-2 duration-200 flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Adicionar Produto
            </button>
          </div>
        </div>

        {/* Tabela */}
        <div className="overflow-x-auto bg-gray-900 text-white rounded-xl shadow">
          <table className="w-full text-sm min-w-[600px]">
            <thead>
              <tr className="bg-gray-800 text-left">
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Nome Produto</th>
                <th className="px-4 py-3">Quantidade</th>
                <th className="px-4 py-3">Preço</th>
                <th className="px-4 py-3">Alterar / Excluir</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, idx) => (
                <tr key={idx} className="border-t border-gray-700">
                  <td className="px-4 py-2">{item.id}</td>
                  <td className="px-4 py-2">{item.nome}</td>
                  <td className="px-4 py-2">{item.quantidade}</td>
                  <td className="px-4 py-2">{item.preco}</td>
                  <td className="px-4 py-2">
                    <Trash2 className="text-red-500 hover:text-red-700 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Botões flutuantes (mobile) */}
      <div className="sm:hidden fixed bottom-4 right-4 flex flex-col gap-3 z-50">
        <button className="bg-primary text-white rounded-full p-4 shadow-lg hover:bg-white hover:text-primary border-2 border-primary duration-200">
          <Search className="w-5 h-5" />
        </button>
        <button className="bg-secondary text-white rounded-full p-4 shadow-lg hover:bg-white hover:text-primary border-2 border-secondary duration-200">
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
