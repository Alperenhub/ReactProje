import React, { useEffect } from 'react'
import axios from 'axios'


const base_url = "http://localhost:3005";


const ApiDelete = () => {

    const deleteUserById = async(userId)=>{

      const deleteResponse=  await axios.delete(`${base_url}/users/${userId}`)
        console.log(deleteResponse.data);
    }
   
    useEffect(()=>{

       deleteUserById("4r2p")
       
    },[])


  return (
    <div>
      <p>Delete işleri</p>
    </div>
  )
}

export default ApiDelete
