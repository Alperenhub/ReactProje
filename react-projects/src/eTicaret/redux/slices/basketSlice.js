import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: [],

}

const getBasketFromStorage = () =>{
    if(localStorage.getItem("basket")){
        return JSON.parse(localStorage.getItem("basket"));
}
    return []; 
}

const writeFromBasketToStorage = (basket) =>{
    localStorage.setItem("basket", JSON.stringify(basket))
}





export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers:{
        addToBasket: (state,action) =>{
        const findProduct =  state.products && state.products.find((product)=> product.id === action.payload.id);
        if(findProduct){
            //daha önceden eklenmiştir.
        }else{
            state.products = [...state.products, action.payload];
            writeFromBasketToStorage(state.products);
        }
        
        }
    }
})

export const {addToBasket } = basketSlice.actions

export default basketSlice.reducer