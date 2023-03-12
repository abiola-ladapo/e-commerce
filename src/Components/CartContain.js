import React from 'react'
import CartProduct from './CartProduct';
import {useDispatch, useSelector } from 'react-redux';
import { cartPointer, clearCart } from '../Features/Cart/cartSlice';

const CartContain = () => {
 const dispatch = useDispatch();
 const {total,amount}= useSelector((store)=>store.cart)
 const cartItems = useSelector(cartPointer)


 if(amount < 1){
  return (

  <section className='px-5 py-5 my-5'>
   <header className='mx-5 px-5'>
    <h3 className='fw-bold mx-5'>Your Cart </h3>
    <p className='text-center'>is currently empty</p>
   </header>
  </section>
  )};

  return (
   <section className=' py-5 my-5'>
   <header className='mx-5 px-5'>
   <h3 className='fw-bold mx-5'>Your Cart </h3>
   </header>
   <div>
    {cartItems.map((item,tee)=>{
     return <CartProduct key={tee} {...item}/>

    })}
   </div>
   <footer className=' d-flex align-items-center justify-content-evenly my-5'>

    <h3 className='fw-bold '>Total <span>${total}</span></h3>
    <button className=' cart-btn px-4 py-1' onClick={()=> dispatch(clearCart())}>Clear cart</button>
   </footer>
  </section>
  )
}

export default CartContain