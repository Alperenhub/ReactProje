import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: [],
    drawer: false,
    totalAmount: 0,

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
            const extractedProducts = state.products.filter((product)=>product.id != action.payload.id);

            findProduct.counter += action.payload.counter;

            state.products = [...extractedProducts, findProduct];
            writeFromBasketToStorage(state.products);

        }else{
            state.products = [...state.products, action.payload];
            writeFromBasketToStorage(state.products);
        }
        
        },

        setDrawer : (state) => {
            state.drawer = !state.drawer;
        },

        calculateBasket : (state, action) =>{
            state.products && state.products.map((product)=>{
                state.totalAmount += product.price;
            })
        }
    }
})

export const {addToBasket, setDrawer, calculateBasket } = basketSlice.actions

export default basketSlice.reducer