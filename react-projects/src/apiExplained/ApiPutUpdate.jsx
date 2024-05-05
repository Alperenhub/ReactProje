import React, { useEffect } from 'react'
import axios from 'axios'


const base_url = "http://localhost:3005";


const ApiPutUpdate = () => {

    const updateUser = async (userId, updatedUser)=>{
        //"Put" veri güncellemek için kullanılır
        const updatedUserResponse = await axios.put(`${base_url}/users/${userId}`,updatedUser)
        console.log(updatedUserResponse.data)
    }
   
    useEffect(()=>{

        const willUser ={
            "username": "serdar",
            "password": "kirkuc"
        }
        updateUser("3a5c",willUser)
       
    },[])


  return (
    <div>
      <p>Put işleri</p>
    </div>
  )
}

export default ApiPutUpdate
