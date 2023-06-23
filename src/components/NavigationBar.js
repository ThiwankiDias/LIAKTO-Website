import "./NavigationBar.css";
import React,{useState} from "react";
import { MenuItems } from "./MenuItem";
import { Link } from "react-router-dom";


function NavigationBar() {
    const [click,setClick] = useState(false);
    const handleClick =()=>{
        setClick(!click);
    }
    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">LIAKTO</h1>
            <div className="menu-icons" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={click ? "nav-menu active" :  "nav-menu"}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.url}><i className={item.icon}></i>{item.title}</Link>
                        </li>
                    )
                })}
                <button>Sign Up</button>
            </ul>
        </nav>
    );
}

export default NavigationBar;