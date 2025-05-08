import React, { useEffect, useState } from "react";
import { Trash2, Search } from "lucide-react";
import logo from '../../assets/logoG.svg';

export default function RelatorioPa() {

    const [geladinho, setgeladinho] = useState([]);
    const [mensagemErro, setMensagemErro] = useState('')

    useEffect(() => {
        async function fetchGeladinho() {
            const token = localStorage.getItem('token');
            if (!token) return setMensagemErro("voce precisa estar logado.")

            try {
                const fetchData = await fetch("http://localhost:5000/geladinho",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                if (!fetchData.ok) throw new Error("erro ao buscar geladinho.");
                const data = await fetchData.json();
                setgeladinho(data);
            } catch (error) {
                setMensagemErro(error.message || "Erro inesperado");
            }
        }
        fetchGeladinho();
    }, []);


    const [vendidos, setVendidos] = useState({});
    const [errosVendidos, setErrosVendidos] = useState({});
    const handleChangeVendidos = (id, value, quantidadeMaxima) => {
        const valorNumerico = Number(value);

        if (valorNumerico > quantidadeMaxima) {
            setErrosVendidos(prev => ({
                ...prev,
                [id]: true
            }));
            return;
        }

        setErrosVendidos(prev => ({
            ...prev,
            [id]: false
        }));

        setVendidos(prev => ({
            ...prev,
            [id]: valorNumerico
        }));
    };


    return (
        <div className="min-h-screen bg-[#c9c9ff] p-4 sm:p-6 md:p-10 relative">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-center space-x-2">
                        <img src={logo} alt="Logo" className="w-10 h-10" />
                        <h1 className="text-2xl font-bold text-[#1e1e1e]">GeladinhoPro</h1>
                    </div>

                    {/* <div className="hidden sm:flex gap-2 items-center">
                            <input
                                type="date"
                                id="dataBusca"
                                name="dataBusca"
                                className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700"
                            />\\\\
                            <button className="bg-primary hover:bg-white text-white font-semibold hover:text-primary border-2 rounded-md px-4 py-2 duration-200 flex items-center gap-2">
                                <Search className="w-4 h-4" />
                                Buscar
                            </button>
                        </div> */}

                </div>

                {/* Tabela */}
                <div className="overflow-x-auto bg-gray-900 text-white rounded-xl shadow">
                    <table className="w-full text-sm min-w-[600px]">
                        <thead>
                            <tr className="bg-gray-800 text-left">
                                <th className="px-4 py-3">ID</th>
                                <th className="px-4 py-3">Sabor</th>
                                <th className="px-4 py-3">Quantidade</th>
                                <th className="px-4 py-3">Preço</th>
                                <th className="px-4 py-3">Vendidos</th>
                                <th className="px-4 py-3">Total</th>

                            </tr>
                        </thead>
                        <tbody>
                            {geladinho.length > 0 ? (
                                geladinho.map((item) => {
                                    const vendidosQtd = Number(vendidos[item.id] || 0);
                                    const preco = Number(item.valor) || 0;
                                    const total = vendidosQtd * preco;

                                    return (
                                        <tr key={item.id} className="border-t border-gray-700">
                                            <td className="px-4 py-2">{item.id}</td>
                                            <td className="px-4 py-2">{item.sabor}</td>
                                            <td className="px-4 py-2">{item.quantidade}</td>
                                            <td className="px-4 py-2">R$ {preco.toFixed(2)}</td>
                                            <td className="px-4 py-2">
                                                <input
                                                    type="number"
                                                    min="0"
                                                    value={vendidos[item.id] || ''}
                                                    onChange={(e) => handleChangeVendidos(item.id, e.target.value, item.quantidade)}
                                                    className={`w-20 px-2 py-1 rounded text-black ${errosVendidos[item.id] ? 'border-2 border-red-500' : ''
                                                        }`}
                                                />

                                            </td>
                                            <td className="px-4 py-2">
                                                R$ {total.toFixed(2)}
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td className="px-4 py-4 text-center" colSpan={6}>
                                        {mensagemErro || "Nenhum geladinho encontrado"}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="  bg-gray-900 text-white mt-4  rounded-xl shadow px-6 py-4 text-right text-lg font-bold ">
                    Lucro Total: R$ {geladinho.reduce((acc, item) => {
                        const vendidosQtd = Number(vendidos[item.id] || 0);
                        const preco = Number(item.valor) || 0;
                        return acc + (vendidosQtd * preco);
                    }, 0).toFixed(2)}
                </div>
            </div>

            {/* Botões flutuantes (mobile) */}
            <div className="sm:hidden fixed bottom-4 right-4 flex flex-col gap-3 z-50">
                <button className="bg-primary text-white rounded-full p-4 shadow-lg hover:bg-white hover:text-primary border-2 border-primary duration-200">
                    <Search className="w-5 h-5" />
                </button>

            </div>
        </div>
    );
}
