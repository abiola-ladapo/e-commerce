import React from 'react'
import './Home.css';
import bg from '../../images/bee.jpg';


const Home = () => {
  return (
    <div className="container-fluid home-container">
    {/* <img className='img-fluid' src={bg} alt="bg" /> */}
     <div className="row d-flex align-items-center justify-content-center">
      <div className="col-md align-items-center justify-content-center home-details text-center">
        <h1 className='home-heading fw-bold'>FURNITURE HOUSE</h1>
        <p className='home-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, <br /> perspiciatis! Consequatur quasi modi quia ex voluptates minima, a praesentium
         <br /> veniam harum, nesciunt, ad totam accusantium beatae maxime? Nulla, temporibus quos. <br />
          Repudiandae deleniti autem natus. Quaerat autem iure excepturi illum fuga!</p>


      </div>
     </div>
    </div>
  )
}

export default Home