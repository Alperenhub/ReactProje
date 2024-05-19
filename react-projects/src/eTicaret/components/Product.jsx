import React from 'react'
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const {id,price, image, title, description} = product;
    
    const navigate = useNavigate();

  return (
    
    <div className=' w-[200px] h-[100%] shadow-md rounded-md cursor-pointer  hover:shadow-xl ease-in-out duration-200'>
      <div className='flex items-center justify-center'>
      <img className='w-[150px] h-[200px] ' src={image} alt={title} />
      </div>
      <div>
      <p className='text-center h-[50px] line-clamp-3'>{title}</p>
      <h3 className='font-bold text-center'>{price} ₺</h3>
      </div>
    <div className='flex items-center justify-center my-2'>
        <button onClick={()=>navigate(`product-details/${id}`)} className='bg-gray-500 rounded-lg px-2 py-1'>Ürüne git</button>
    </div>

    </div>
  )
}

export default Product
