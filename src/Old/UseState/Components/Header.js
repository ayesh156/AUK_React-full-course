import {IoClose, IoMenu} from "react-icons/io5";
import {useState} from "react";

const Header = () => {
    const [menuClick, setMenuClick] = useState(false);
    return(
    <header className="header_container">
        <h1>
            AUK <span>DEV</span>
        </h1>
        <nav>
            <ol>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Project</li>
            </ol>
            <div className="header_menuIcon">
                <IoMenu onClick={() => setMenuClick(pre=>!pre?true:pre)}/>
            </div>
            <ul style={{right: `${menuClick ? "-20px" : "-250px"}`,}}>
                    <div className="header_menuIcon">
                        <IoClose onClick={() => setMenuClick(pre=>pre?false:pre)}/>
                    </div>
                    <div className="header_menu">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Project</li>
                    </div>
                </ul>
        </nav>
    </header>
)
};

export default Header;