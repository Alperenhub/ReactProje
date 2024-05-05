import React, { useState } from 'react'
import axios from 'axios';

let baseUrl = "https://api.freecurrencyapi.com/v1/latest";
let apiKey = "fca_live_c0qRqR21dKhIslsdi6xJJwxWrFmxN88v9gFGXVmo"


const Currency = () => {

    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState(0);

    const exchange = async() =>{
        
       const response = await axios.get(`${baseUrl}?apikey=${apiKey}&base_currency=${fromCurrency}`);
        const result1 = ((response.data.data[toCurrency])*amount).toFixed(2); //toFixed ondalıklı sayının noktadan sonra kaç basamağının görüneceğini hesaplatır
        setResult(result1)
    }


  return (
    <div className='w-[100%] h-[100%]  flex justify-center items-center'>
        <div className='z-10 bg-[#52f421e1] min-w-[300px] w-[60%] h-[50%] rounded-2xl flex items-center justify-center flex-col'>
            <div className='mb-7'><h1 className='text-2xl text-white'>Bu para kaç para?</h1></div>
            
            <div className='flex flex-row my-2'>
            <input type='number' className='amount p-1'
             value={amount}   
             onChange={(e)=>setAmount(e.target.value)}
            />
             <select onChange={(e)=>setFromCurrency(e.target.value)} className='mx-1'>
                <option>USD</option>
                <option>EUR</option>
                <option>TRY</option>
             </select>
             </div>
             <div className=''>
                <button onClick={exchange} className=' px-2 border border-black bg-gray-200 rounded-2xl'>Çevir</button>
             </div>
             <div className='flex flex-row my-2'>
             <input value={result} onChange={(e)=>setResult(e.target.value)} type='number' className='result p-1' />
             <select onChange={(e)=>setToCurrency(e.target.value)} className='mx-1'>
                <option>TRY</option>
                <option>EUR</option>
                <option>USD</option>
             </select>
             </div>
             
        </div>
        </div>
  )
}

export default Currency
