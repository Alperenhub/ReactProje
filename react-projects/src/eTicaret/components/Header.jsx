import React, { useState } from 'react'
import { FaBasketShopping } from "react-icons/fa6";
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';



const Header = () => {

  const [theme, setTheme] = useState(false);

  const navigate = useNavigate();

  const changeTheme = () =>{
    const root = document.getElementById("root");
    setTheme(!theme);
    if(theme){
      root.style.backgroundColor="black";
      root.style.color ="#fff"
    }else{
      root.style.backgroundColor="white";
      root.style.color ="black"
    }
  }
 

  return (
    <div className='flex flex-row items-center justify-between'>
      <div className='flex flex-row items-center justify-center'>
        <img onClick={()=>navigate('/')} className='w-[60px] h-[60px] cursor-pointer' src='vite.svg' alt='logo'/>
        <p className='font-mono text-xl font-bold'>Alpy</p>
      </div>

      <div className='flex flex-row items-center'>
        <input className=' border-b border-gray-200 p-2 outline-none' type='text' placeholder='Arama yapınız'/> 
      {/* outline-none: inputa tıkladığımızda focus olmasını engelliyoruz */}
      <div className='flex flex-row w-[70px] justify-around'>
      {theme ?       <CiSun onClick={changeTheme} className='text-lg hover:cursor-pointer'/>
 :    <FaMoon onClick={changeTheme} className='text-lg hover:cursor-pointer'/> 
  }
      <FaBasketShopping className='text-lg hover:cursor-pointer'/>
      </div>
      </div>

    </div>
  )
}

export default Header
