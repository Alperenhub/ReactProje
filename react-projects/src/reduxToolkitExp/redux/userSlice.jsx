import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    users: [],
    loading: false
}

//     const fetchUserById = createAsyncThunk(
//     'users/fetchByIdStatus',
//     async (userId: number, thunkAPI) => {
//       const response = await userAPI.fetchById(userId)
//       return response.data
//     },
//   )
//yukarıdaki işlemi kendimize göre aşağıda yazdık
export const getAllUsers = createAsyncThunk('users', async()=>{
    const response =await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response.data)
    return response.data
})

export const userSlice = createSlice({
    name: "user",
    initialState, //eğer yukarıda yazdığımız değişken adı initialState değil de başka bir şey olsaydı, mesela "state" burada initialState: state yazmalıydık
    reducers: {
        //Http isteği olmaz ise kullanılır.
    
    },
    extraReducers: (builder) =>{
        //Http isteği varsa kullanılır.
        builder.addCase(getAllUsers.fulfilled,(state,action)=>{ //yeni bir durum ekliyoruz. getAllUsers çalıştıysa yeni bir fonksiyon çalıştırıyoruz. state değeri initialState'i temsil ediyor. action değeri ise fonksiyonun return ettiği değeri gösteriyor . EZBERLEMEK ZORUNDA DEĞİLSİN SİTESİNDEN BAK 
            state.users = action.payload;
        })
    }
})

export const { } = userSlice.actions
export default userSlice.reducer