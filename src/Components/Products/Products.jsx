import React, { useState } from 'react'
import './Products.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Data from '../../Data';
import { useDispatch } from 'react-redux';
import { addItem } from '../../Features/Cart/cartSlice';



const Products = () => {

  const dispatch=useDispatch()
  const clickHandler=(id)=>{



    dispatch(addItem(id))};




  const [product, setProduct] = useState(Data);
  const filterResult = (categoryItem) => {
    const result = Data.filter((currentData) => {
      return currentData.category === categoryItem;
    });
    setProduct(result);
  }


  return (
    <div className="container product-container">
      <div className="row">
        <h3 className='text-left mt-5 mb-3 pt-2 fw-bold'>Chairs & Sofas <hr /> </h3>
        {/* <h3 className='text-left mt-5 mb-3 pt-2 fw-bold'>Chairs & Sofas <hr/> </h3> */}
        <div className="col-md select-products d-flex align-items-center justify-content-between mb-5">
          <button className='btn px-5  py-1 mb-2' onClick={() => filterResult('Sofa')}>Sofa</button>
          <button className='btn px-5  py-1 mb-2' onClick={() => filterResult('Chair')}>Chair</button>
          <button className='btn px-5  py-1 mb-2' onClick={() => filterResult('Two seaters')}>Two Seater</button>
          <button className='btn px-5  py-1 mb-2' onClick={() => setProduct(Data)}>All</button>
        </div>

      </div>


      <div className="row  ">
        {product.map((x,teep) => {
          return (




            <div className="col-md d-flex align-items-center justify-content-center" key={teep}>
              <Card className='product mb-5' style={{ width: '15rem', height: '22rem' }}>
                <Card.Img variant="top" src={x.image} style={{ width: '15rem', height: '17rem' }} />
                <Card.Body className='product-detail'>
                  <Card.Text className='product-text1 text-center'>{x.name}</Card.Text>
                  <Card.Text className='product-text2 text-center fw-bold'>${x.price}</Card.Text>


                  <Button  onClick={()=>clickHandler(x.id)} className='product-btn px-3 py-1'>Add to Cart</Button>
                </Card.Body>
              </Card>
              {/* <div className="products my-5 ">
           <img className='img-fluid mt-2' src={x.image} alt="chair" width={200} />
           <p>{x.name}</p>
           <p>${x.price}</p>
           <button>Add to cart</button>
          </div> */}
            </div>

          )

        })}

      </div>
    </div>
  );



}

export default Products