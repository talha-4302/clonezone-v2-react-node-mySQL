import  { useState } from 'react';

const HeaderSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'assets/header1.jpg',
    'assets/header2.jpg',
    'assets/header3.jpg',
    'assets/header4.jpg',
    'assets/header5.jpg',
    'assets/header6.jpg'
  ];

  const changeSlide = (index) => {
    if (index < 0) 
    {
      setCurrentIndex(images.length - 1);
    } 
    else if (index >= images.length)
     {
      setCurrentIndex(0);
    } 
    else 
    {
      setCurrentIndex(index);
    }
  };

  const handlePrevClick = () => {
    changeSlide(currentIndex - 1);
  };

  const handleNextClick = () => {
    changeSlide(currentIndex + 1);
  };

  return (
    <div className="header-slider">
      <a href="#" className="control-prev" onClick={handlePrevClick}>⬅️</a>
      <a href="#" className="control-next" onClick={handleNextClick}>➡️</a>

      <ul>
        {images.map((image, index) => (
          
            <img 
              key={index}
              src={image} 
              className="header-img" 
              style={{ display: index === currentIndex ? 'block' : 'none' }} 
              alt={`Slide ${index + 1}`} 
            />
        
        ))}
      </ul>
    </div>
  );
};

export default HeaderSlider;
