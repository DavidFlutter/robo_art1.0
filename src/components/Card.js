import React from 'react'
import {FaExternalLinkAlt} from "react-icons/fa"
import {BiSolidUser} from "react-icons/bi"

const Card = ({username, userID}) => {
  return (
    <div className='Card'>
        <div className="image-div">
            <img src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="person" />
        </div>
        <div className="content-div">
            <h3>
                {username}
            </h3>
            <div className="buttons">
                <a className='detail-page-link'>
                    <BiSolidUser></BiSolidUser>
                    <span>see profile</span>
                </a>
                <a className='portfolio-page-link'>
                    <FaExternalLinkAlt></FaExternalLinkAlt>
                    <span> see work</span>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Card