import logos from "../assets/LOGOS.jpg"
import "./header.css"
import NavMenu from "../components/NavMenu/NavMenu";
import MenuBtn from "../components/MenuBtn/MenuBtn";
import { useState, useEffect } from 'react';




function Header() {

  

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
  console.log(isSmallScreen);
  const fullHeader = () => {
    return(
      <header className="navMenu">
        <div className='logo'>
          <img src={logos} id='logoimg' alt="DoubleHeartsBrigade"/>
        </div>
        <NavMenu/>
      </header>

    )
  };
  const responsiveHeader = () => {
    return (
      <header className="navMenu">
        <div className='logo'>
          <img src={logos} id='logoimg' alt="DoubleHeartsBrigade"/>
        </div>
        <MenuBtn />
      </header>
    )
  }
  return (isSmallScreen ? responsiveHeader() : fullHeader());
}

export default Header;