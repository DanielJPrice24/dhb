import './NavMenu.css'
//import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
//import { FaTumblr } from '@react-icons/all-files/fa/FaTumblr'


function NavMenu() {
    return (
        <ul>
          <a href='#top' className='navLink'><li className='navItem'>HOME</li></a>
          <a href='#comics' className='navLink'><li className='navItem'>COMICS</li></a>
          <a href='#gallery' className='navLink'><li className='navItem'>GALLERY</li></a>
          <a href='https://www.tumblr.com/thedoubleheartsbrigade' target="_blank" rel="noreferrer" className='navLink'>
            <li className='navItem'>
              TUMBLR
            </li>
          </a>
          <a href='https://www.instagram.com/danny2hearts/' target="_blank" rel="noreferrer" className='navLink'>
            <li className='navItem'>
              INSTAGRAM
            </li>
          </a>
        </ul>
    )
}

export default NavMenu;