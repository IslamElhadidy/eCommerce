import React from 'react'
import slide1 from '../images/slide-1.jpg'
import slide2 from '../images/slide-2.jpg'
import './Slider.css'

function Slider() {
  return (
    <>
<div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src= {slide1} className="d-block w-100 height-500" alt="..." />
    </div>
    <div className="carousel-item">
      <img src= {slide2} className="d-block w-100 height-500" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </>
  )
}

export default Slider