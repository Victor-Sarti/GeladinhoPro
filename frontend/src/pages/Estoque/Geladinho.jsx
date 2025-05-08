  import React, { useEffect, useState } from "react";
  import { Trash2, Plus, Search, SquarePen  } from "lucide-react";
  import logo from '../../assets/logoG.svg';

  export default function Geladinho() {
    const [produtos, setProdutos] = useState([]);
    const [mensagemErro, setMensagemErro] = useState('');
    //formulario para update 

    const [editandoId, setEditandoId] = useState(null);
    const [formData, setFormData] = useState({
      sabor: "",
      quantidade: 0,
      valor: 0,
    });

    function iniciarEdicao(item) {
      setEditandoId(item.id);
      setFormData({
        sabor: item.sabor,
        quantidade: item.quantidade,
        valor: item.valor,
      });
    }


    //função upate

    async function handleUpdate(id, dadosAtualizados) {
      const token = localStorage.getItem("token");

      const response = await fetch(`http://localhost:5000/geladinho/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(dadosAtualizados),
      });

      if (response.ok) {
        alert("Atualizado com sucesso!");
        window.location.reload();     
       } else {
        alert("Erro ao atualizar geladinho.");
      }
    }



    //função para deletar 

    async function handleDelete(id) {
      const token = localStorage.getItem("token")

      const response = await fetch(`http://localhost:5000/geladinho/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setProdutos(produtos.filter((item) => item.id !== id));
      } else {
        alert("Erro ao deletar");
      }

    }

    // Função para carregar os produtos da API
    useEffect(() => {
      async function fetchProdutos() {
        const token = localStorage.getItem('token');

        if (!token) {
          setMensagemErro("Você precisa estar logado.");
          return;
        }

        try {
          const response = await fetch("http://localhost:5000/geladinho", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (!response.ok) throw new Error("Erro ao buscar geladinhos");

          const data = await response.json();
          setProdutos(data);
        } catch (error) {
          setMensagemErro(error.message || "Erro inesperado");
        }
      }

      fetchProdutos();
    }, []);

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
                Adicionar Geladinho
              </button>
            </div>
          </div>

          {/* Tabela */}
          <div className="overflow-x-auto bg-gray-900 text-white rounded-xl shadow">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="bg-gray-800 text-left">
                  <th className="px-4 py-3">ID</th>
                  <th className="px-4 py-3">Nome Geladinho</th>
                  <th className="px-4 py-3">Quantidade</th>
                  <th className="px-4 py-3">Preço</th>
                  <th className="px-4 py-3"> Excluir  /  Alterar</th>
                </tr>
              </thead>
              <tbody>
                {produtos.length > 0 ? (
                  produtos.map((item) => (
                    <tr key={item.id} className="border-t border-gray-700">
                      <td className="px-4 py-2">{item.id}</td>
                      <td className="px-4 py-2">{item.sabor}</td>
                      <td className="px-4 py-2">{item.quantidade}</td>
                      <td className="px-4 py-2">
                        {/* Verificar se item.valor é um número válido */}
                        R$ {(isNaN(item.valor) ? 0 : Number(item.valor)).toFixed(2)}
                      </td>
                      <td className="px-4 py-2 flex gap-8">
                        <Trash2 className="text-red-500 hover:text-red-700 cursor-pointer" onClick={() => handleDelete(item.id)} />
                        <SquarePen  className=" text-purple-300 hover:text-purple-700 cursor-pointer" onClick={() => iniciarEdicao(item)} />

                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="px-4 py-4 text-center" colSpan={5}>
                      {mensagemErro || "Nenhum produto encontrado"}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* formulario para update */}
            {editandoId && (
              <div className=" p-4 rounded-lg shadow mt-6 max-w-md mx-auto">
                <h2 className="text-xl font-semibold mb-4">Editar Geladinho</h2>
                <label className="block mb-2">
                  Sabor:
                  <input
                    className="w-full bg-black border p-2 rounded"
                    type="text"
                    value={formData.sabor}
                    onChange={(e) => setFormData({ ...formData, sabor: e.target.value })}
                  />
                </label>
                <label className="block mb-2">
                  Quantidade:
                  <input
                    className="w-full  bg-black border p-2 rounded"
                    type="number"
                    value={formData.quantidade}
                    onChange={(e) =>
                      setFormData({ ...formData, quantidade: Number(e.target.value) })
                    }
                  />
                </label>
                <label className="block mb-4">
                  Valor:
                  <input
                    className="w-full bg-black border p-2 rounded"
                    type="number"
                    step="0.01"
                    value={formData.valor}
                    onChange={(e) =>
                      setFormData({ ...formData, valor: Number(e.target.value) })
                    }
                  />
                </label>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleUpdate(editandoId, formData)}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    Salvar
                  </button>
                  <button
                    onClick={() => setEditandoId(null)}
                    className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-500"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            )}


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
