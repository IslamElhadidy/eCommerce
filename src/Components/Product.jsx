import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'


function Product(props) {
  return (
    <>
        <div className="col-md-6 col-sm-6 mb-5">
            <div className="card p-3 text-center">
                <img className='img-height'  src={props.product.image} alt={props.product.title} />
                <h3>{props.product.title}</h3>
                <h4>{props.product.price}</h4>
                <h5>{props.product.category}</h5>
                <div className="button">
                  <Link to={`/product/${props.product.id}`} className=' btn-outline-primary'>Details</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Product