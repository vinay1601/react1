import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className="container">
        <div>
          <img className="logo1" src="/public/images/logo.png" alt="" />
        </div>
        <ul className="nav1">
          <li>Home</li>
          <li>About</li>
          <li>Product</li>
          <li>Contact</li>

        </ul>

        <button>Signup</button>
      </nav>
    </div>
  )
}

export default Header
