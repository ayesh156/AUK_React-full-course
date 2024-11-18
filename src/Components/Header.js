import {IoClose, IoMenu} from "react-icons/io5";
import {useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Header = () => {
    const [menuClick, setMenuClick] = useState(false);

    return (
        <HeaderContainer>
            <HeaderLeft>
                <h1>AUK <span>DEV</span></h1>
            </HeaderLeft>
            <HeaderRight menuClick={menuClick}>
                <MenuIcon onClick={() => setMenuClick(pre => !pre)}>
                    <IoMenu />
                </MenuIcon>
                <ol>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/project'>Project</Link></li>
                </ol>
                <ul>
                    <MenuIcon onClick={() => setMenuClick(pre => !pre)}>
                        <IoClose/>
                    </MenuIcon>
                    <div>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li><Link to='/project'>Project</Link></li>
                    </div>
                </ul>
            </HeaderRight>
        </HeaderContainer>
    )
};

export default Header;

const HeaderContainer = styled.header`
    padding: 17px;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #d2fce6;
`;

const HeaderLeft = styled.div``;

const HeaderRight = styled.nav`
    position: relative;

    ol{
        display: none;
    }
    
    ul{
        position: absolute;
        z-index: 110;
        top: -18px;
        right: ${({menuClick}) => (menuClick ? "-22px" : "-200px")};
        padding: 17px;
        background-color: #2dfc8e;
        height: 100vh;
        transition: all 0.4s ease-in;

        div {
            padding: 50px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 17px;
        }
    }
    
    @media (min-width: 768px) {
        section,
        ul{
            display: none;
        }
        
        ol{
            display: flex;
            align-items: center;
            gap: 17px;
            padding-right: 25px;
        }
    }

`;

const MenuIcon = styled.section`
    font-size: 28px;
    width: 30px;
    cursor: pointer;
`;