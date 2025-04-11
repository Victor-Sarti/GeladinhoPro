import React from 'react';
import geladin2 from '../../assets/geladin2.svg';
import Button from '../comp/Button';
import Form from '../comp/Form'; 

export const Registro = () => {
    return (
        <section className='bg-slate-50'>
            <div className='flex flex-col md:flex-row items-center justify-between p-4 md:px-28 gap-8'>

                <div className='flex flex-col gap-6 w-full md:w-2/3'>
                    <h1 className='font-semibold text-3xl'>Registros</h1>
                    <p className='text-stone-600'>
                        Registre seus ganhos, diários para obter um melhor controle.
                    </p>

                    <form className="space-y-4">
                        <Form label="Sabor do Geladinho" />
                        <Form label="Quantidade" type="number" min="0" />
                        <Form label="Preço" placeholder="R$" />
                        <Form label="Data da Venda" type="date" />

                        <Button className='' text="Adicionar Venda" variant="primary" />
                    </form>
                </div>

                <div className='w-full md:w-1/3'>
                    <img
                        src={geladin2}
                        className='w-full h-auto object-contain'
                        alt="Geladinho"
                    />
                </div>
            </div>
        </section>
    );
};
