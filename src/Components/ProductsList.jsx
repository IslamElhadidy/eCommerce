import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Product from './Product';
import './Product.css'

function ProductsList() {
  const[products,setProducts] = useState([])
  const[categories,setCategories] = useState([])

  // const getProducts = () => {
  //   fetch('https://fakestoreapi.com/products')
  //   .then((res) => res.json())
  //   .then((json) => setProducts(json) )
  // }

    const getProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data)
    }

    const getCategories = async () => {
      const response = await axios.get('https://fakestoreapi.com/products/categories');
      setCategories(response.data)
    }

    const getProductsByCategory = async ($category) => {
      const response = await axios.get(`https://fakestoreapi.com/products/category/${$category}`);
      setProducts(response.data)
    }


    useEffect(() => {
      getProducts()
    },[])

    
    useEffect(() => {
      getCategories()
    },[])



  return (
    <>
        <section className='container py-4'>

            <div className='text-h'>
              <h2 className='text-center my-4 text'>Our Products :-</h2>
            </div>

            <div className='d-flex justify-content-center gap-3 py-3'>
            <button className='btn btn-dark' onClick={ () => getProducts()}>All</button>
              {
                categories &&  categories.map((category) => {
                  return(
                          <button className='btn btn-dark' onClick={ () => getProductsByCategory(category) }>{category}</button>
                        )
                  })
              }
            </div>



            <div className="row">

                {
                products &&  products.map((product) => {
                  return(
                          <Product product={product} key={product.id} />
                        )
                  })
                }

            </div>
        </section>
    </>
  )
}

export default ProductsList;