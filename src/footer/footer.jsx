import NavMenu from '../components/NavMenu/NavMenu';
import './footer.css'
import logo from '../assets/LOGOS.jpg'

function Footer() {
    return(
        <footer 
            style={{ 
                position: 'relative', 
                bottom: '0', 
                display: 'flex', 
                width: '100%',  
                backgroundColor: '#C48BD9'
            }}>
            <div className='firstCol' style={{ marginRight: '5vw' }}>
                <img src={logo} alt="logo" className='foot-logo' />
                <div className='copyright'>
                    <p>© DOUBLE HEARTS BRIGADE 2024</p>
                </div>
            </div>
            <NavMenu className="nav" style={{ marginLeft: '5vw' }}/>
        </footer>
    )
}

export default Footer;