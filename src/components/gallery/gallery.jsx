//import { imageSources } from "../assets/images";
import './gallery.css'
import { imageSources } from '../../assets/images';
import { useState } from "react";


export default function Gallery({ handleImageClick }) {

  const [hoveredIndex, setHoveredIndex] = useState(null);
    
  return (
        <div className="gallery">
        {imageSources.map((image, index) => (
          <div
            className='gall-item'
            onClick={() => handleImageClick(index)}
            key={image.title}
            onMouseEnter={() => { 
              //console.log('Mouse enter', index);
              setHoveredIndex(index);
            }}
            onMouseLeave={() => { 
              //console.log('Mouse leave', index);
              setHoveredIndex(null)
            }}
          >
            <div className='image-container'>
              <img src={image.src} srcSet={image.srcSet} alt={image.title} className='gall-image'/>
            </div>
            <div>
              <p 
              style={{ 
                color: '#C48BD9', 
                backgroundColor: 'white',
                fontFamily: 'sans-serif', 
                fontWeight: 'bold', 
                textTransform: 'uppercase', 
                textAlign: 'center',
                borderRadius: '5px'
              }} 
              className="img-title"
              >
              {image.title}
              </p>
            </div>
          </div>
          
            ))}
        </div>
    );
}
