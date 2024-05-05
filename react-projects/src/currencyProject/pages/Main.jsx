import React from 'react'

const Main = () => {
  return (
    <div style={{
      backgroundImage: 'url(/images/bg.jpg)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '100vw', // Sayfanın tam genişliği
      height: '100vh', // Sayfanın tam yüksekliği
      opacity: '0.5', // Opacity (0.0 - 1.0 aralığında değer alır, 1.0 tam opak)
       // Grayscale (0% - 100% aralığında değer alır, 0% orijinal renk, 100% tamamen gri tonlaması)
    }}>
        <div className='w-[100%] h-[100%] bg-[#a0f8ba56] flex justify-center items-center'>
        <div className='z-10 bg-[#21f428a2] w-[70%] h-[40%] rounded-2xl'>
            <p className='text-black text-center'>fasdf </p>  
        </div>
        </div>
    </div>
  )
}

export default Main
