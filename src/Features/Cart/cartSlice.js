import { createSlice } from '@reduxjs/toolkit';
import cartjson from '../../Data';

const initialState = {
 cartItems: [],
 amount: 0,
 total: 0,
 isLoading:true,
};


const cartSlice = createSlice({
 name:'cart',
 initialState,
 reducers:{
  clearCart:(state)=>{
   state.cartItems = [];
  },
  removeItem : (state, action)=>{
   const itemId = action.payload
   state.cartItems= state.cartItems.filter((item)=>item.id !== itemId);
  },

  addItem:(state,action)=>{
    console.log(typeof action.payload)
    console.log(cartjson)
//     const itemIndex=cartjson.findIndex((item) =>item.id === action.payload);
    let check = false;
      for (let index = 0; index < state.cartItems.length; index++) {
        const element = state.cartItems[index];
        if (element.id === action.payload) {
          const itemIndex = state.cartItems.indexOf(element);
          const newItems = [...state.cartItems];
          newItems[itemIndex] = cartjson[action.payload];
          state.cartItems = [...newItems];
          check = true;
          break;
        }
      }
      if (!check) {
state.cartItems = [...state.cartItems,cartjson[action.payload]]
}

  },

  increase:(state,{payload})=>{
   const cartItem = state.cartItems.find((item)=> item.id ===payload.id)
   cartItem.amount=cartItem.amount + 1;
  },

  decrease:(state,{payload})=>{
   const cartItem = state.cartItems.find((item)=> item.id ===payload.id)
   cartItem.amount=cartItem.amount - 1;
  },
  calculateTotals: (state)=>{
   let amount = 0;
   let total = 0;
   state.cartItems.forEach((item)=>{
    amount += item?.amount
    total += item?.amount * item?.price
   })
   state.amount= amount;
   state.total = total;
  },


 },

});

// console.log(cartSlice);
export const cartPointer =(state)=> state.cart.cartItems;
export const {clearCart,removeItem,addItem,increase,decrease,calculateTotals}= cartSlice.actions;
export default cartSlice.reducer;