import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import laptop from '../assets/laptop.jpg';

const Contact = () => {
    const [mainData, setMainData] = useState([]);
    const [themeChange, setThemeChange] = useState(false);

    useEffect(() => {
        const dataFetching = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
            const data = await res.json();
            if (data) {
                setMainData(data);
            }
        }

        dataFetching();
    })
    return (
    <ContactContainer>
        <h1>Contact page</h1>
        <button onClick={()=> setThemeChange(pre=>!pre)}>Change Theme</button>
        <ContactBlock>
        {mainData?.map(({id, title}) => (
            <Link to={`/contact/${id}`} key={id} >
                <ContactBlockUnit changeTheme={themeChange}>
                    <img src={laptop} alt="contact block unit"/>
                    <h3>{title}</h3>
                </ContactBlockUnit>
            </Link>
        ))}
        </ContactBlock>
    </ContactContainer>
)};

export default Contact;

const ContactContainer = styled.main`
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContactBlock = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 25px;
`;

const ContactBlockUnit = styled.div`
    padding: 20px;
    border-radius: 7px;
    border: 2px solid ${({changeTheme}) => {
        if(changeTheme) {
            return "black";
        } else {
            return "#f7b0b0";
        }
    }};
    background-color: ${(props) => (props.changeTheme ? "black" : "#f7b0b0")};
    transition: all 0.4s ease-in;
    
    &:hover {
        background-color: inherit;
    }
    
    img{
        width: 100%;
        object-fit: contain;
    }
    
    h3{
        font-size: 14px;
    }
`;