import {Link} from "react-router-dom"
import { NonceAccount } from "@solana/web3.js";
import { FaDiscord, FaTwitterSquare, FaBars, FaTimes} from "react-icons/fa";
import {useEffect, useState} from "react";
import { WbIncandescentTwoTone } from "@material-ui/icons";

<link href="http://fonts.cdnfonts.com/css/common-pixel" rel="stylesheet"></link>
                
const NavBar = () => {

    const [close, setClose] = useState("nav-links-closed");
    const [open, setOpen] = useState("fa-bars");
    const [width, setWidth] = useState(window.innerWidth);

    const resize = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
        }
    }, [width]);

  

    return (
        <>   
        <nav>
            
        <div className={close}>
            
            <FaTimes size={35} className="fa-times" onClick={()=> {
            
                if (width <= 700) {
                    setClose("nav-links-closed");
                    setOpen("fa-bars");
                    }
                }}/>
            <ul className="nav-bar-ul">
                <li  className="nav-bar-title"><Link to="/" className="navbarHeader">Wizards of SOL</Link></li>
                <li className="nav-bar-li"><Link to="/" className="navbarText">Home</Link></li>
                <li className="nav-bar-li"><Link to="more" className="navbarText">Roadmap</Link></li>
                <li className="nav-bar-li"><Link to="about" className="navbarText">About</Link></li>
                <li  style={{paddingRight:"50px"}} className="nav-bar-li"><Link to="/connect-wallet" className="navbarText">Nfts</Link></li>
            
                <a href="https://discord.gg/EGGPvwNh" className="nav-bar-logo" target="_blank"><FaDiscord size={35} /></a>
                <a href="https://twitter.com/WizardsSol" className="nav-bar-logo" target="_blank"><FaTwitterSquare size={35} /></a>
            </ul>
        </div>
                 <FaBars size={35} className={open} onClick={()=> {
                
                    if (width <= 700) {
                         setClose("nav-links");
                         setOpen("fa-bars-closed");
                     }
                 
                    
                    
                 }}/>
        </nav>
        </>
    );
}

export default NavBar;