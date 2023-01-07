import React from 'react'
import { useParams } from 'react-router-dom' 
import {useState,useEffect} from 'react'
import axios from 'axios';

function ProductDetails() {

const prams = useParams();

const[product,setProduct] = useState([])

const getProduct = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${prams.id}`);
    setProduct(response.data)
}

useEffect(() => {
    getProduct()
},[])

return (
    <>
        <div className="d-flex justify-content-center align-items-center py-5">
            <div className="card p-3 text-center py-5">
                <img className='img-height' src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <h4>{product.price}</h4>
                <h5>{product.category}</h5>
            </div>
        </div>
    </>
)
}

export default ProductDetails 