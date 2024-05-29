import React, { useEffect } from 'react'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import ProductList from './components/ProductList'
import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux'
import { calculateBasket, setDrawer } from './redux/slices/basketSlice'


const AppCommerce = () => {


  const {products, drawer, totalAmount} = useSelector((store)=> store.basket);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(calculateBasket());
    
  },[])


  return (
    <div>
      <PageContainer>
        
        <Header/>
        <RouterConfig/>
        <Loading/>
        <Drawer sty anchor='right' open={drawer} onClose={()=>dispatch(setDrawer())} >
              {
                products && products.map((product)=>{
                  return (
                    <div>
                    <div className='flex flex-row p-4'>  
                      <img src={product.image} width={50} height={50} />
                      <p className='w-[350px]'>{product.title}({product.counter})</p>
                      <p>{product.price} TL</p>
                      <button className='bg-red-400 rounded-lg w-12 h-8 '>Sil</button>
                    </div>
                   
                    </div>
                  )
                })
              }
               <div>
                      <p>toplam tutar :{totalAmount}</p>
                    </div>
          </Drawer>
    </PageContainer>
    </div>
  )
}

export default AppCommerce
