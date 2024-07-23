import { featuredGallery } from '../../assets/images';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './featured-gallery.css'





//ADD A SRCSET TO THE IMG ELEMENT

function FeaturedGallery({ handleImageClick /*Used as parameter to make available for function and to communicate index to app.js : can call handleImageClick without defining it here*/}) {

const [hoveredIndex, setHoveredIndex] = useState(null); //this is for showing the title cards in the featured gallery section using the onMouseEnter and onMouseLeave methods : current state before hovering is null so nothing happens

const [isSmallScreen, setIsSmallScreen] = useState(false); //state manager for checking if the screen is small enough to change UI

useEffect(() => {
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 1400); //if screen is less than or equal to 1400px then change state to true
  };

  // Initial check on component mount : called every time window is resized
  handleResize();

  // Event listener for window resize
  window.addEventListener('resize', handleResize);
  
  // Cleanup
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);



return(

<ImageList
  id='f-gall-lg'
  variant="quilted" 
  cols={isSmallScreen ? (1) : (12) } //checks isSmallScreen state and assigns columns based screen width
  rowHeight={100} 
>
  
  {featuredGallery.map((image, index) => ( //accepts two parameters: image element and its index
    
    <ImageListItem 
        key={index} 
        cols={image.cols || 4} 
        rows={image.rows || 2}
        onMouseEnter={() => { 
            //console.log('Mouse enter', index);
            setHoveredIndex(index);
        }}
        onMouseLeave={() => { 
            //console.log('Mouse leave', index);
            setHoveredIndex(null)
        }}
        style={{ position: 'relative', overflow: 'hidden', borderRadius: '5px' }}
        onClick={() => handleImageClick(index)}//index here is a parameter as well : takes it from function and sends to app.js so it can open the modal on clicked image
    >
      <img src={image.src} alt={image.title} srcSet={image.srcSet} loading="lazy" />
      {(hoveredIndex === index || isSmallScreen) && ( //displays the title card when hovering over image
        <Card
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            backgroundColor: '#C48BD9',
            borderRadius: '5px'
          }}
        >
          <CardContent>
            <p 
              style={{ 
                color: '#C48BD9', 
                backgroundColor: 'white',
                fontFamily: 'sans-serif', 
                fontWeight: 'bold', 
                textTransform: 'uppercase', 
                textAlign: 'center', 
                borderRadius: '5px'
              }}>
                {image.title}
            </p>
          </CardContent>
        </Card>
      )}
    </ImageListItem>
  ))}
</ImageList>
)
}

export default FeaturedGallery;

/**/