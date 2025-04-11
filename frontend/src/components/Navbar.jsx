import React from 'react';
import logo from "../assets/logoG.svg";
import { IoArrowDown } from "react-icons/io5"; 
import { MdMenu } from 'react-icons/md';
import ResponsiveMenu from './ResponsiveMenu';

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
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <nav className=' bg-slate-50 '>
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

          <div className=' flex items-center gap-2'>
            <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
              <IoArrowDown className='' /> 
            </button>
            
            <button className=' hover:bg-secondary text-secondary font-semibold hover:text-white rounded-md border-2 border-secondary px-6 py-2 duration-200 hidden md:block'>
              cadastre
            </button>

            <button className=' bg-primary hover:bg-white text-white font-semibold hover:text-primary rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block'>
              login
            </button>           
          </div>


        <div className=' md:hidden' onClick={()=> setOpen(!open)}>
        <MdMenu className='text-4xl'/>
        </div>
          
        </div>
      </nav>
      <ResponsiveMenu open={open}/>

    </>
  );
}