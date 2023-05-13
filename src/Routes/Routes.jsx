import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Booking from "../Pages/Booking/Booking";
import BookingDetails from "../Pages/BookingDetails/BookingDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
        {
            path:'booking/:id',
            element:<PrivateRoute><Booking></Booking></PrivateRoute>,
            loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        }
        ,
        {
            path:'bookingDetails',
            element:<PrivateRoute><BookingDetails></BookingDetails></PrivateRoute>
            
        }
      ]
    },
  ]);

  export default router;