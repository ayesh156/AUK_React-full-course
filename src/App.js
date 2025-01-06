// import './App.css';
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Project from "./Components/Project";
import styled from "styled-components";
import Socket from "./Components/Socket";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/project",
        element: <Project />,
    },
    {
        path: "/socket",
        element: <Socket />,
    }
])

const App = () => {
    return (
        <AppContainer>
            <RouterProvider router={router} />
        </AppContainer>
    )

}

export default App;

const AppContainer = styled.main`
    width: 100vw;
    overflow-x: hidden;
`;