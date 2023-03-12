import React,{useEffect,useRef, useState} from 'react'
import bees from '../../images/popular4.png';
import './Product1.css';
import { addItem } from '../../Features/Cart/cartSlice';

const Products1 = () => {

  const [Days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  let interval=useRef();

  const startTimer= ()=>{
    const countdownDate = new Date('March 25, 2023 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days =Math.floor(distance/(1000*60*60*24));
      const hours =Math.floor((distance % (1000*60*60*24)/(1000*60*60)));
      const minutes =Math.floor((distance % (1000*60*60))/(1000*60));
      const seconds =Math.floor((distance % (1000*60))/1000);

      if (distance < 0){
        clearInterval(interval.current);

      } else{
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }

    }, 1000);

  };

  useEffect(() => {
    startTimer();
    return() =>{
      clearInterval(interval.current);

    };
  });

    return (
      <div className="container product1-container" >
       <h3 className='mt-5 pt-5 fw-bold'>Deal of the Day<hr/></h3>
       <div className="row">
        <div className="col-md py-5 px-5 deal">
         <h5 className='fw-bold'>Stylish ArmChair</h5>
         <span className='discount'>$350</span> <span className='fw-bold fs-5 mx-2'>$250</span>
         <p className='deal-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Corrupti tenetur velit eaque sequi? Ad incidunt quis, quas quo deleniti voluptatum.</p>

          <div className="deal-timer pt-3  d-flex text-center align-items-center justify-content-between">
           <div className='days d-flex text-center align-items-center justify-content-center'>
            <span className='fs-2 fw-bold px-4 py-4'>{Days}</span>
           </div>
           <span className='fs-1 fw-bold'>:</span>

           <div className='hours d-flex text-center align-items-center justify-content-center'>
            <span className='fs-2 fw-bold px-4 py-4'>{hours}</span>
           </div>
           <span className='fs-1 fw-bold'>:</span>

           <div className='mins d-flex text-center align-items-center justify-content-center'>
            <span className='fs-2 fw-bold px-4 py-4'>{minutes}</span>
           </div>
           <span className='fs-1 fw-bold'>:</span>

           <div className='secs d-flex text-center align-items-center justify-content-center'>
            <span className='fs-2 fw-bold px-4 py-4'>{seconds}</span>
           </div>
          </div>



        </div>
        <div className="col-md px-2 d-flex text-center align-items-center justify-content-center">
         <img className='img-fluid' src={bees} alt="bees" width={'300px'} />

        </div>
       </div>
      </div>
    );



};

export default Products1