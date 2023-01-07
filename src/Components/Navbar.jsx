import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    
<nav className="navbar navbar-expand-md bg-dark">
  <div className="container">
    <Link className="navbar-brand" to="/">
      <h2 className='text-light'>e-Commerce</h2>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link active text-light " aria-current="page" to="/">Products</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>

    
    </>
  )
}

export default Navbar