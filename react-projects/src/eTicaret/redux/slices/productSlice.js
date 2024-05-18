import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  product: [],
  selectedProduct : {},
  loading:false
}

const BASE_URL = "https://fakestoreapi.com"

export const getAllProducts = createAsyncThunk("getAllProducts", async()=>{
   const response = await axios.get(`${BASE_URL}/products`);
   return response.data;
})


export const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{

    },
    extraReducers : (builder)=>{
        builder.addCase(getAllProducts.fulfilled, (state)=>{
         state.loading = true;
        })
        builder.addCase(getAllProducts.pending), (state, action)=>{
            state.loading=false;
            state.product = action.payload;
        }

    }
})


export const { } = counterSlice.actions

export default productSlice.reducer