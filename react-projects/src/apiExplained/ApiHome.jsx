import React, { useEffect } from 'react'
import axios from 'axios'

const base_url = "http://localhost:3005";

const ApiHome = () => {

    const getAllUsers = async() =>{
      const response = await axios.get(`${base_url}/users`)
      console.log(response.data)
    }

    const getUserById = async(userId) =>{
        const response = await axios.get(`${base_url}/users/${userId}`);
        console.log(response.data)
    }
    

    
    
    useEffect(()=>{
        //getAllUsers();
        getUserById(1)

        

    },[])

   return (
    <div>
      papi
    </div>
  )
}

export default ApiHome
