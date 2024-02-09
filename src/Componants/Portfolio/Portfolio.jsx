import React, { useState } from 'react';
import style from './Portfolio.module.css';
import img from '../../Assets/imgs/3.jpg'
import img2 from '../../Assets/imgs/4.jpg'
import img3 from '../../Assets/imgs/5.jpg'


// Define an array of images
const imgArray = [
  img,
  img2,
  img3,
  img2, 
  img3,
  img  
];

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showSelectedImage, setShowSelectedImage] = useState(false);

  const handleItemClick = (image) => {
    setSelectedImage(image);
    setShowSelectedImage(true);
  };

  const handleHideImage = () => {
    setShowSelectedImage(false);
  };

  return (
    <div className="container">
      <div className='d-flex flex-column align-items-center py-5'>
        <h2 className='fw-bold pt-3'>PORTFOLIO COMPONENT</h2>
        <div className={`${style.starContainer} d-flex justify-content-center align-items-center`}><i className={`fa-solid fa-star`} ></i></div>
      </div>

      <div className="row g-3 py-4 ">
        {imgArray.map((image, index) => (
          <div className="col-md-4" key={index}>
            <div className={style.item} onClick={() => handleItemClick(image)}>
              <img src={image} className='w-100' alt={`Product-img-${index}`} />
              <div className={`${style.layer} d-flex justify-content-center align-items-center `}><i className={`fa-solid fa-plus fs-1`} ></i></div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && showSelectedImage && (
        <div className={style.selectedImageContainer} onClick={handleHideImage}>
          <img src={selectedImage} alt="Selected-img" className={`w-50`} />
        </div>
      )}
    </div>
  );
}
