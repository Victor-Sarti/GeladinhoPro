import React from 'react';
import table from '../../assets/table.svg';
import Button from '../comp/Button';

const Hero = () => {
    return (
        <section>
            <div className='flex flex-col md:flex-row items-center justify-between p-4'>
                <div className='flex flex-col justify-center gap-4 md:pl-28'>
                    <h1 className='font-semibold text-5xl'>Controle de Geladinho</h1>
                    <p className='text-stone-600 w-full h-14'>
                        Desenvolvimento de uma solução integrada que facilita o controle financeiro e de estoque de forma eficaz.
                    </p>
                    <div>   
                        <Button text="Comece Agora" variant="primary" />
                    </div>
                </div>

                <img 
                    src={table} 
                    alt="Imagem de uma mesa" 
                    className='w-full md:w-1/2 h-auto object-contain' 
                />
            </div>
        </section>
    );
}

export default Hero;