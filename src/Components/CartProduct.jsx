import React from 'react'
import { BsFillCaretDownFill,BsFillCaretUpFill } from "react-icons/bs";
import { BsFillTrash3Fill } from 'react-icons/bs';
import {removeItem} from '../Features/Cart/cartSlice';
import { useDispatch } from 'react-redux';
import './CartProduct.css';
import { increase,decrease } from '../Features/Cart/cartSlice';



const CartProduct = ({id,image,name,price,amount}) => {
  const dispatch =useDispatch()
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md'>
        <section className='add mt-3 d-flex align-items-center price'>
    <div>
     <img src={image} alt={name}  width={'80px'}/>
    </div>

     <div className='pr1'>{name}</div>
     <div className='pr2 text-right'>${price}</div>

     <div>
     <button className='cart-btn px-4 py-1 fw-bold' onClick={()=>{
      dispatch(removeItem(id));
     }}> <BsFillTrash3Fill/> </button>
    </div>

    <div className='align-items-center justify-content-center'>
     <button onClick={()=>{
      if (amount ===0){
        dispatch(removeItem(id))
      } else{
        dispatch(decrease({id}))}}

      }


       className='inc'> <BsFillCaretDownFill/> </button>
     <p className='text-center align-items-center justify-content-center'>{amount}</p>
     <button onClick={()=>{dispatch(increase({id}))}} className='inc'> <BsFillCaretUpFill/> </button>
    </div>
    </section>



        </div>
      </div>
    </div>


  );
};

export default CartProduct;