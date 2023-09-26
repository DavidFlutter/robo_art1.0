import React from 'react'
import { Link } from 'react-router-dom';
import {AiFillHome} from "react-icons/ai";


const Header = () => {
  return (
    <div className="header-wrapper">
        <header>
            <Link to={"/"} className='logo-link'>
              <h1>
                  Robo art
              </h1>
            </Link>
            <Link to={"/"} className='home-link'>
              <AiFillHome></AiFillHome>
            </Link>
        </header>
      </div>
  )
}

export default Header