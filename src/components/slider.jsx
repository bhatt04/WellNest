import React, { useState, useEffect } from 'react';
// Import images from assets folder
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';
import image4 from '../assets/main.jpg';

const images = [image1, image2, image3, image4];  // Use imported images
const links = ['/page1', '/page2', '/page3', '/page4'];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change slide every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-110 py-1 my-1  overflow-hidden">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
      />
      {/* Optional: Add navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
