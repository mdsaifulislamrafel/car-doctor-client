import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Checkout from "../Pages/Checkout/Checkout";
import { url } from "../utility/url";
import About from "../Pages/Home/About";
import Booking from "../Pages/Booking/Booking";
import Error from "../Pages/Error/Error";
import PrivateRoute from "./PrivateRoute";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <SignUp />
            },
            {
                path: "/book/:id",
                element: <Checkout />,
                loader: ({ params }) => fetch(`${url}/services/${params.id}`)
            },
            {
                path: "/booking",
                element: <PrivateRoute><Booking /></PrivateRoute>
            }
        ]
    },
]);