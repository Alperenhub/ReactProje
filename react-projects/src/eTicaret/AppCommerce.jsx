import React from 'react'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import ProductList from './components/ProductList'
import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'

const AppCommerce = () => {
  return (
    <div>
      <PageContainer>
        
        <Header/>
        <RouterConfig/>
        <Loading/>
    </PageContainer>
    </div>
  )
}

export default AppCommerce
