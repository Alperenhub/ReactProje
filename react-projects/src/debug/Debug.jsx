
import React, { useState } from 'react'

const Debug = () => {

  const [vize1, setVize1] = useState(0);
  const [vize2, setVize2] = useState(0);
  const [ortalama,setOrtalama] = useState(0);

  const ortalamaBul = () =>{
    // debugger'ı hatayı bulmamızı kolaylaştırmak için koyarız. webde incele menüsünden source bölümünden inceleme yapabiliyorsun
    debugger 
    setOrtalama((vize1+vize2)/2)    
  }


  return (
    <div className='flex items-center justify-center bg-slate-300 flex-col'>
      <div >
   {/* onChange fonksiyonu değiştiğinde "event" adında parametre alıyor, biz buna "e" adını verdik. e.target.value ile değişen değeri aldık. e.target.value string döndüğü için number'a çevirdik */}
        <input type='number' value={vize1} onChange={(e)=>setVize1(Number(e.target.value))}/>   
      </div>
      <div>
        <input type='number' value={vize2} onChange={(e)=>setVize2(Number(e.target.value))}/>
      </div>
      <div>
        <button onClick={ortalamaBul}>Ortalamasını bul</button>
      </div>
      <div>
        <p>{ortalama>0?ortalama:""}</p>
      </div>
    </div>
  )
}

export default Debug
