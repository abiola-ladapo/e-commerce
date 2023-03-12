import React from 'react'
import './Services.css';
import { BsCart4 } from 'react-icons/bs';


function Services() {
  return (
    <div className="container-fluid service-container d-flex align-items-center justify-content-center py-5 ">
     <div className="row d-flex service align-items-center justify-content-center">

      <div className="col-md service1 px-3 py-3 mb-3 mx-2">
        <h6 className='fw-bold'>FREE SHIPPING</h6>
        <BsCart4/>
        <span className='ps-2'>free shipping on all  orders from USA</span>
       </div>

        <div className="col-md service1 px-3 py-3 mb-3 mx-2">
        <h6 className='fw-bold'>FREE SHIPPING</h6>
        <BsCart4/>
        <span className='ps-2'>free shipping on all orders from USA</span>
       </div>

       <div className="col-md service1 px-3 py-3 mb-3 mx-2">
        <h6 className='fw-bold'>FREE SHIPPING</h6>
        <BsCart4/>
        <span className='ps-2'>free shipping on all orders from USA</span>
       </div>

       <div className="col-md service1 px-3 py-3 mb-3 mx-2">
        <h6 className='fw-bold'>FREE SHIPPING</h6>
        <BsCart4/>
        <span className='ps-2'>free shipping on all orders from USA</span>
       </div>




     </div>
    </div>
  )
}

export default Services