import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";



const ProductDetails = () => {

    const {id} = useParams();
    const {products,selectedProduct} = useSelector((store)=> store.product)
    
    const {price,image,title,description} = selectedProduct;

    const dispatch = useDispatch();

    const [counter,setCounter] = useState(0);
    const increase = () =>{
        setCounter(counter+1)
    }
    const decrease = () =>{
        if(counter>0){
        setCounter(counter-1)
        }
    }

    useEffect(()=>{
        getProductById();//product detail sayfasında verileri tekrar apiden almak yerine zaten çekmiş olduğumuz verileri redux ile setleyip kullandık.
    },[id])

    const getProductById = () =>{
        products && products.map((product)=>{
            if(product.id==id){
                dispatch(setSelectedProduct(product));
            }
        })
    }

  return (
    <div>
      {/* Product details {id} */}
        <div className='mt-9 flex flex-around items-center '>
            <div className='mr-4'>
            <img src={image} className='h-[250px] w-[350px]'/>
            </div>
            <div>
                <h2 className='font-bold text-2xl mb-3'>{title}</h2>
                <h3>{description}</h3>
                <h1 className='font-bold text-2xl mt-4 text-green-500'>{price}</h1>
            <div className='flex flex-row mt-2 items-center'>

                <CiCircleMinus onClick={decrease} className='text-3xl cursor-pointer'/>
               <span className='text-2xl'> {counter} </span> 
                <CiCirclePlus onClick={increase} className='text-3xl cursor-pointer'/>

            </div>

            <div>
                <button className='mt-7 border-none p-2 bg-slate-300 rounded-md'>sepete ekle</button>
            </div>

            </div>
        </div>
    </div>
  )
}

export default ProductDetails
