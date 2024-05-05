import React, { useEffect } from 'react'
import axios from 'axios'


const base_url = "http://localhost:3005";


const ApiPost = () => {

    const createUser = async(newUser) =>{
        //"Post" veri eklemek için kullanılır
        const newUserResponse =  await axios.post(`${base_url}/users`,newUser)
        console.log("response",newUserResponse.data)
    }

    useEffect(()=>{

        const newUser = {
            //id'yi otomatik olarak atıyor jsonserver
            "username": "Birkan",
            "password": "ondort"
        }
        createUser(newUser)
    },[])


  return (
    <div>
      <p>Post işleri</p>
    </div>
  )
}

export default ApiPost
