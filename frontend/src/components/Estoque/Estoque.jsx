import React from 'react'
import Title from '../comp/Title'
import Table3 from '../../assets/Table3.svg'
export default function Estoque() {
    return (

        <section>
            <div className='flex flex-col items-center justify-center p-4'>
               <Title title={"Estoque"} desc={"Liste, Adicione, Altere ou Remova"}/>
            <img src={Table3} alt="" />
            </div>


        </section>
    )
}
