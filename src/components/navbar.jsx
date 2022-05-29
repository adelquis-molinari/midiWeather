import { useState} from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faUser, faMessage, faSearch, faGear, faL } from "@fortawesome/free-solid-svg-icons"
import "../styles/navbar.css";

const NavBar = () => {
    const [isHome, setIsHome] = useState(false);
    const [search, setSearch] = useState(true);
    const [settings, setSettings] = useState(true);
    const activeHome = () =>{
        setIsHome(false);
        setSearch(true);
        setSettings(true);
    }
    const activeSearch = () =>{
        setSearch(false);
        setIsHome(true);
        setSettings(true);
    }
    const activeSettings = () =>{
        setSettings(false);
        setIsHome(true);
        setSearch(true);
    }
    const listItem =["Home","Search", "Settings"];
    return ( 
        <nav className="navigation">
            <ul>
                <li 
                className={isHome ?  "list" : "list active"}
                onClick={ isHome ? activeHome : null}
                >
                    <Link to="/">
                        <span className="icon">
                        <FontAwesomeIcon icon={faHome} />
                        </span>
                        <span className="text">Home</span>
                    </Link>
                </li>
                <li
                className={search ? "list" : "list active"}
                onClick={ search ? activeSearch : null}
                >
                    <Link to="/">
                        <span className="icon">
                            <FontAwesomeIcon icon={faSearch} />
                        </span>
                        <span className="text">Search</span>
                    </Link>
                </li>
                <li
                className={settings ?  "list" : "list active"}
                onClick={ settings ? activeSettings : null}
                >
                    <Link to="/">
                        <span className="icon">
                        <FontAwesomeIcon icon={faGear} />
                        </span>
                        <span className="text">Settings</span>
                    </Link>
                </li>
            <div className="indicator" ></div>
            </ul>
        </nav>
     );
}
 
export default NavBar;