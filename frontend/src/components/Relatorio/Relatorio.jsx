import React from 'react'
import Table2 from "../../assets/Table2.svg"

const Relatorio = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold text-center mb-2">Relatórios</h1>
      <p className="text-center mb-4">
        Insira a Data Para a Busca: <span className="font-medium"> __/__/__</span>
      </p>
      <img src={Table2} alt="" />
      
    </div>
  )
}

export default Relatorio
