import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react';
import { Drawer } from '@mui/material';
import NavMenu from '../NavMenu/NavMenu';
import './MenuBtn.css'



function MenuBtn() {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    }
    
    return(
        <>
            <MenuIcon 
                className="menuIcon" 
                style={{height: 'inherit', width: '10vw'}}
                onClick={toggleMenu} 
            />
            <Drawer 
                open={open} 
                onClose={() => setOpen(false)}
                anchor='right'
                disableScrollLock 
            >
                <div className='navContainer'><NavMenu/></div>
            </Drawer>
        </>
    )
}

export default MenuBtn;