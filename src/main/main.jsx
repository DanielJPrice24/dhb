import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './main.css'
import { Modal } from '@mui/material';
import Gallery from '../components/gallery/gallery';
import FeaturedGallery from '../components/featured-gallery/featured-gallery';
import { imageSources } from '../assets/images';



function Main() {
    const [open, setOpen] = useState(false); //open = current-state = useState(false / not open) :        setOpen = change-state = setOpen(true)
    const [active, setActive] = useState(0); //active = current-state = useState(0 / first image) :   setActive = change image to designated index = setActive(n)

    const handleClose = () => setOpen(false); //function activated onClose : changes OPEN state to FALSE/this closes the modal

    const handleImageClick = (index) => {
        setActive(index);
        setOpen(true);
    };//function assigns its only parameter, INDEX, to active and assigns TRUE to setOpen : this takes the index of the image being clicked and opens the modal to that index in the array of images
    
    return(
        <main>
            <section id='home'>
                <FeaturedGallery handleImageClick={handleImageClick /*Makes handleImageClick available to the component*/} />
            </section>
      
      
            <section>
                <Modal open={open /*whatever the current state of OPEN is*/} onClose={handleClose /*when you click outside the modal or on the close button the function is called*/}>
                    <div 
                        style={{ 
                            display: 'block',  
                            width: 'auto', 
                            padding: 30, 
                            margin: 'auto', 
                            outline: 'none'
                        }}
                    >  
                        <Carousel 
                            activeIndex={active /*sets the carousel index to the active state which is the image array index*/} 
                            onSelect={(index) => setActive(index) /*onSelect is a function for changing images with the Carousel indicators*/} 
                            style={{
                                maxHeight: '75vh'
                            }}
                        > 
                            {imageSources.map((image, index) => (
                                
                                <Carousel.Item 
                                    interval={4000} 
                                    key={index} 
                                    style={{maxHeight: '75vh'}}
                                > 
                                    <img 
                                        className={`d-block w-100 ${image.title}`}
                                        src={image.src}
                                        alt={image.title}
                                        style={{ 
                                            maxHeight:'inherit', 
                                            objectFit: 'contain' 
                                        }}
                                    />
                                </Carousel.Item> 
                            ))}
                        </Carousel> 
                        <div onClick={handleClose}>CLOSE</div>
                    </div> 
                </Modal>
            </section>
      

            <section id='comics'>
                <h1>COMICS</h1>
            </section>
      
            <section id='gallery'>
                <h1>GALLERY</h1>
                <div className='gal'>
                    <Gallery handleImageClick={handleImageClick} />
                </div>
            </section>
        </main>
    )
}

export default Main;