import { createSlice } from '@reduxjs/toolkit'

const initialState={
 products: [] ,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    
    addtocart: (state,action) => {
      const existingProduct = state.products.find(product => product.id === action.payload.id);
      if (existingProduct) {
        existingProduct.qnt += action.payload.qnt;}
      else {
        state.products.push(action.payload);
      }
    },
    removefromcart:(state,action)=>{
      state.products=state.products.filter(item=>item.id!==action.payload.id)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addtocart ,removefromcart} = cartSlice.actions

export default cartSlice.reducer