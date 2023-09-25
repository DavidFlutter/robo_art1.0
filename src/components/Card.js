import React, { useEffect, useState } from 'react'
import {FaExternalLinkAlt} from "react-icons/fa"
import {BiSolidUser} from "react-icons/bi"

const Card = ({
    username, 
    userID, 
    setUserDetailsModalIsVisible,
    setCurrentUserID,
}) => {

    const [userImage, setUserImage] = useState(null);
    const getUserImage = async () => {
        let newimages = [];
        const resp = await fetch(`https://reqres.in/api/users/${userID}`);
        const data = await resp.json();
        const image = data.data;
        setUserImage(image.avatar)
    }

    const handleOpenModal = () => {
        setCurrentUserID(userID)
        setUserDetailsModalIsVisible(true)
    }
    useEffect(() => {
        getUserImage();
    })
  return (
    <div className='Card'>
        <div className="image-div">
            {userImage && <img src={userImage} alt="person" />}
        </div>
        <div className="content-div">
            <h3>
                {username}
            </h3>
            <div className="buttons">
                <a className='detail-page-link'
                    onClick={() => handleOpenModal()}
                >
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