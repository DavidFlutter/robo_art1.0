import React from 'react'
import { Link } from 'react-router-dom';
import {AiFillHome} from "react-icons/ai";


const Header = () => {
  return (
    <div className="header-wrapper">
        <header>
            <Link to={"/robo_art1.0"} className='logo-link'>
              <h1>
                  Robo art
              </h1>
            </Link>
            <Link to={"/robo_art1.0"} className='home-link'>
              <AiFillHome></AiFillHome>
            </Link>
        </header>
      </div>
  )
}

export default Header