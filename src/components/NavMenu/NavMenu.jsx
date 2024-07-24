import './NavMenu.css'
import { FaInstagram } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";


function NavMenu() {
    return (
        <ul>
          <a href='#top' className='navLink'><li className='navItem'>HOME</li></a>
          <a href='#comics' className='navLink'><li className='navItem'>COMICS</li></a>
          <a href='#gallery' className='navLink'><li className='navItem'>GALLERY</li></a>
          <a href='https://www.tumblr.com/thedoubleheartsbrigade' target="_blank" rel="noreferrer" className='navLink'>
            <li className='navItem'>
              <FaTumblr />
            </li>
          </a>
          <a href='https://www.instagram.com/danny2hearts/' target="_blank" rel="noreferrer" className='navLink'>
            <li className='navItem'>
              <FaInstagram />
            </li>
          </a>
        </ul>
    )
}

export default NavMenu;