import React from 'react'
import geladin2 from '../../assets/geladin2.svg'

export const Registro = () => {
    return (
        <div className=' bg-slate-50 '>

            <div className='flex flex-col md:flex-row items-center justify-between p-4 md:pl-28'>
                <div className='flex flex-col gap-6 w-full md:w-2/3'>
                    <h1 className='font-semibold text-3xl'>Registros</h1>
                    <p className='text-stone-600'>
                        Registre seus ganhos, diários para obter um melhor controle.
                    </p>

                    <div>
                        
                    </div>
                </div>
            </div>

            <img
                src={geladin2}
                className='w-full md:w-1/3 h-auto object-contain'
                alt="Geladinho"
            />

        </div>
    )
}
