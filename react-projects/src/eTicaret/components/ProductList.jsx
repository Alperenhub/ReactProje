import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice';
import Product from './Product';

const ProductList = () => {

    const dispatch = useDispatch();
    const {products} = useSelector((store) => store.product);
    console.log(products)

    useEffect(()=>{
        dispatch(getAllProducts())
    },[])

  return (
    <div className='flex flex-row flex-wrap items-center justify-center gap-5 mt-3'>
      {
        products && products.map((product)=>(
          <Product key={product.id} product={product} />
        ))
      }
    </div>
  )
}

export default ProductList
