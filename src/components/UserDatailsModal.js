import React, { useEffect } from 'react'
import { useState } from 'react';
import {AiOutlineClose} from "react-icons/ai";

const UserDatailsModal = ({
    setUserDetailsModalIsVisible,
    currentUserID,
}) => {

    const [currentUser, setCurrentUser] = useState({
        image: null, useraname: null, email: null, 
        fName: null, lName: null, phoneNumber: null, 
        address:null, 
        lastest: [
            `https://robohash.org/${currentUserID}?set=set2?size=120x120`,
            `https://robohash.org/${currentUserID * 100}?set=set2?size=120x120`
        ],
    });
    const [isReady, setIsReady ] = useState(false);
    const handleClose = () => {
        setUserDetailsModalIsVisible(false);
    }

    const getUser1 = async () => {
        // getting image
        const imageResp = await fetch(`https://reqres.in/api/users/${currentUserID}`);
        const imageData = await imageResp.json();
        const myImage = imageData.data.avatar;
        const myFName = imageData.data.first_name;
        const myLName = imageData.data.last_name;
        const myEmail = imageData.data.email;

        // getting other data
        const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${currentUserID}`);
        const data = await resp.json();
        const myUsername = data.username;
        const myPNumber = data.phone;
        const myAddress = data.website;

        setCurrentUser({
            ...currentUser,
            image:myImage,
            fName:myFName,
            lName: myLName,
            email: myEmail,
            useraname:myUsername,
            phoneNumber:myPNumber,
            address: myAddress,
        });
        setIsReady(true);

    }

    const getUser2 = async () => {
        
    }
    const getAllData = async () => {
        await getUser1();
        await getUser2();
    }

    useEffect(() => {
        getAllData();
    },[]);

  return (
    <div className='UserDatailsModal'>
        <div className="backdrop" onClick={() => handleClose()}>
            <div className="tile">
                <header>
                    <img src={currentUser.image} alt="" />
                    <div className="details">
                        <p>
                            <span>username</span>: {currentUser.useraname} {currentUserID}
                        </p>
                        <p>
                            <span>email</span>: {currentUser.email}
                        </p>
                    </div>
                </header>
                <div className="modal-body">
                    <p>
                        <span>First name</span>: {currentUser.fName}
                    </p>
                    <p>
                        <span>Last name</span>: {currentUser.lName}
                    </p>
                    <p>
                        <span>Phone number</span>: {currentUser.phoneNumber}
                    </p>
                    <p>
                        <span>Address</span>: {currentUser.address}
                    </p>
                </div>
                <h2>Latest post</h2>
                <div className="work">
                    <img src={currentUser.lastest[0]} alt="" />
                    <img src={currentUser.lastest[1]} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserDatailsModal