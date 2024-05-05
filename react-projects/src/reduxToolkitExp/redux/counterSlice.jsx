import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 28
    //isAuth: false
}

export const counterSlice = createSlice({
    name:"counter",
    initialState,

    reducers:{ //reducerların içine fonksiyonlarımızı yazıyoruz.
        increment:(state)=>{
            state.value++;
        },
        decrement:(state) =>{
            state.value--;
        }
    }
})

export const {increment, decrement } = counterSlice.actions //fonksiyonları buradan dışarıya açıyoruz
export default counterSlice.reducer