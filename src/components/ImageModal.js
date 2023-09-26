import React from 'react'

const ImageModal = ({image, setCurrentImage}) => {
  return (
    <div className='ImageModal'>
        <div className="backdrop"
            onClick={() => {
                setCurrentImage(null)
            }}>
            <img src={image} alt="" />
        </div>
    </div>
  )
}

export default ImageModal