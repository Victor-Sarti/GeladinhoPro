import React from 'react';
import logo from "../assets/logoG.svg";
import { IoArrowDown } from "react-icons/io5"; // Importando o ícone de seta

const navItems = [
  {
    label: 'Início',
    link: '#inicio',
    className: 'nav-link active',
  },
  {
    label: 'Sobre',
    link: '#sobre',
    className: 'nav-link',
  },
  {
    label: 'Estoque',
    link: '#estoque',
    className: 'nav-link',
  },
  {
    label: 'Registros',
    link: '#registros',
    className: 'nav-link',
  },
  {
    label: 'Relatórios',
    link: '#relatorios',
    className: 'nav-link',
  },
];

export default function Navbar() {
  return (
    <>
      <nav>
        <div className='container flex justify-between items-center py-8'>
          <div className='text-2xl flex items-center gap-2 font-bold'>
            <img src={logo} alt="" />
            <p>Geladinho <span className='text-primary'>Pro</span></p>
          </div>

          <div className='hidden md:block'>
            <ul className='flex items-center gap-6 text-gray-600'>
              {navItems.map((item, index) => {
                return (
                  <li key={index}>
                    <a 
                      href={item.link}  
                      className={`${item.className} inline-block py-1 px-3 hover:text-primary font-semibold`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
              <IoArrowDown className='' /> 
            </button>
            
            <button className=' hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block'>
              login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}