import React from 'react'
import {AiFillHome} from "react-icons/ai";


const Header = () => {
  return (
    <div className="header-wrapper">
        <header>
            <a href='#' className='logo-link'>
            <h1>
                Robo art
            </h1>
            </a>
            <a href='#' className='home-link'>
            <AiFillHome></AiFillHome>
            </a>
        </header>
      </div>
  )
}

export default Header