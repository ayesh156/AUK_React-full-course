import './App.css';
import Home from "./Components/Home";
import About from "./Components/About";
import ContactDetails from "./Components/ContactDetails";
import Contact from "./Components/Contact";
import User from "./Components/User";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

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
        path: "/contact/details",
        element: <ContactDetails />,
    },
    {
        path: "/contact/:id",
        element: <User />
    }
])

const App = () => {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )

}


export default App;