import React, { useState } from 'react'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slices/basketSlice';



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));



const Header = () => {

  const [theme, setTheme] = useState(false);

  const navigate = useNavigate();

  const {products} = useSelector((store)=>store.basket);

  const dispatch = useDispatch();

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
    <div className='flex flex-row items-center justify-between z-10'>
      <div className='flex flex-row items-center justify-center'>
        <img onClick={()=>navigate('/')} className='w-[60px] h-[60px] cursor-pointer' src='vite.svg' alt='logo'/>
        <p className='font-mono text-xl font-bold'>Alpy</p>
      </div>

      <div className='flex flex-row items-center'>
        <input className=' border-b border-gray-200 p-2 outline-none' type='text' placeholder='Arama yapınız'/> 
      {/* outline-none: inputa tıkladığımızda focus olmasını engelliyoruz */}
      <div className='flex flex-row w-[70px] justify-around'>
      {theme ?       <CiSun onClick={changeTheme} className='text-lg hover:cursor-pointer mt-3'/>
 :    <FaMoon onClick={changeTheme} className='text-lg hover:cursor-pointer mt-3'/> 
  }
    <IconButton aria-label="cart">
        <StyledBadge onClick={()=>dispatch(setDrawer())} badgeContent={products.length} color="error">
          <ShoppingCartIcon />
        </StyledBadge>
    </IconButton>
          </div>

          
      </div>

    </div>
  )
}

export default Header
