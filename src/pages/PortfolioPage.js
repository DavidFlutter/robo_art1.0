import ImageModal from '../components/ImageModal';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PortfolioPage = () => {
    const {id} = useParams();

    const [user, setUser] = useState({
        username: null, email: null,
        image: null, 
        work: [
            `https://robohash.org/${id}?set=set2?size=120x120`,
            `https://robohash.org/${id * 100}?set=set2?size=120x120`,
            `https://robohash.org/${id * 1000}?set=set2?size=120x120`,
            `https://robohash.org/${id * 1001}?set=set2?size=120x120`,
            `https://robohash.org/${id * 1011}?set=set2?size=120x120`,
            `https://robohash.org/${id * 1111}?set=set2?size=120x120`,
            `https://robohash.org/${id * 1112}?set=set2?size=120x120`,
            `https://robohash.org/${id * 1122}?set=set2?size=120x120`,
            `https://robohash.org/${id * 1222}?set=set2?size=120x120`,
            `https://robohash.org/${id * 1300}?set=set2?size=120x120`,
        ],
    });
    const [currentImage, setCurrentImage] = useState(null);

    const handleCurrentImage = (image) => {
        setCurrentImage(image);
    }

    const getUserInfo = async() => {
        const imageResp = await fetch(`https://reqres.in/api/users/${id}`);
        const imageData = await imageResp.json();
        const myImage = imageData.data.avatar;
        const myEmail = imageData.data.email;

        const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await resp.json();
        const myUsername = data.username;

        setUser({
            ...user,
            username:myUsername,
            email: myEmail,
            image: myImage,
        })
    }
    useEffect(() => {
        getUserInfo();
    }, []);
  return (
    <div className='PortfolioPage'>
        {currentImage && <ImageModal image={currentImage}
            setCurrentImage={setCurrentImage}
        ></ImageModal>}
        <header>
            {user.image && 
                <img src={`${user.image}`} alt="user profile"/>
            }
            <div className="details">
                <p>
                    <span>username</span>: {user.username && user.username} 
                </p>
                <p>
                    <span>email</span>: {user.email && user.email} 
                </p>
            </div>
        </header>
        <div className="work">
            <h2>My work</h2>
            <div className="work-images">
                {user.work.map(image => (
                    <div className='work-image'>
                        <div className="image-div">
                            {/* {userImage && <img src={userImage} alt="person" />} */}
                            <img src={image} alt="" 
                                onClick={() => handleCurrentImage(image)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default PortfolioPage