import React from 'react'
import Currency from '../components/Currency'

const Main = () => {
  return (
    <div style={{
      backgroundImage: 'url(/images/bg.jpg)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '100vw', // Sayfanın tam genişliği
      height: '100vh', // Sayfanın tam yüksekliği
       // Opacity (0.0 - 1.0 aralığında değer alır, 1.0 tam opak)
      filter: 'grayscale(0.5)',

    }}>
        <Currency/>
    </div>
  )
}

export default Main
