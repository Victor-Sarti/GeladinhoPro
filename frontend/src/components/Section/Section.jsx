import React from 'react';
import geladin from '../../assets/geladin.svg';

const CheckIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-purple-600 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
        />
    </svg>
);

const Section = () => {
    return (
        <section className=  'bg-slate-50 '>
            <div className='flex flex-col md:flex-row items-center justify-between p-4 md:pl-28'>
                <div className='flex flex-col gap-6 w-full md:w-2/3'>
                    <h1 className='font-semibold text-3xl'>Quem Somos?</h1>
                    <p className='text-stone-600'>
                        Nascemos da paixão por sabores e da vontade de trazer uma <br />experiência única para quem ama geladinhos.
                    </p>
                    <ul className='flex flex-col gap-3'>
                        <li className='flex items-center text-lg md:text-base'>
                            <CheckIcon />
                            Produtos de Qualidade
                        </li>
                        <li className='flex items-center text-lg md:text-base'>
                            <CheckIcon />
                            Atendimento ao Cliente
                        </li>
                        <li className='flex items-center text-lg md:text-base'>
                            <CheckIcon />
                            Higienização
                        </li>
                    </ul>
                    <p className='text-stone-600'>
                        Cada geladinho é feito com atenção aos detalhes, garantindo <br /> um sabor excepcional.
                    </p>
                </div>

                <img
                    src={geladin}
                    className='w-full md:w-1/3 h-auto object-contain'
                    alt="Geladinho"
                />
            </div>
        </section>
    );
}

export default Section;