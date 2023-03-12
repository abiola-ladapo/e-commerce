import './App.css';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './Components/Services/Services';
import Products1 from './Components/Products1/Products1';
import CartContain from './Components/CartContain';
import { useDispatch,useSelector } from 'react-redux';
import { calculateTotals } from './Features/Cart/cartSlice';
import { useEffect } from 'react';





// import Cart from './Components/Cart/Cart';

// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  const {cartItems}= useSelector((store)=>store.cart)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <div className="App">
     <Home/>
     <Products/>
     <Services/>
     <Products1/>
     <CartContain/>
     {/* <Cart/> */}

    </div>
  );
}

export default App;
