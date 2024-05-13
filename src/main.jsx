import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import AuthProvider from './Provider/AuthProvider';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home/Home';
import Register from './Pages/Home/Register/Register';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import NeedVolunteer from './Pages/NeedVolunteerPage/NeedVolunteer';
import AddVoluteerPage from './Pages/AddVlunteerPage/AddVoluteerPage';
import PrivetRoute from './Pages/Privet/PrivetRoute';
import VolunteerDtls from './Pages/NeedVolunteerPage/VolunteerDtls';
import BeVolunteer from './Pages/BeVolunteer/BeVolunteer';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>  ,
     
    children: [
      {
        path: "/",
    element:<Home></Home>
      },
      {
        path: "/need",
        element:<NeedVolunteer></NeedVolunteer>,
        loader: () =>
          fetch(`${import.meta.env.VITE_API_URL}/AddPost`)
          
      },

      {
         path: "/addpost",
           element:<PrivetRoute><AddVoluteerPage></AddVoluteerPage></PrivetRoute>
      },
      {
        path: '/post/:id',
        element:<PrivetRoute>   <VolunteerDtls></VolunteerDtls></PrivetRoute> ,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/post/${params.id}`),
      },
      {
        path: '/be/:id',
        element:<PrivetRoute>  <BeVolunteer></BeVolunteer> </PrivetRoute> ,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/post/${params.id}`),
      }, 
       





        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/signup",
          element:<Register></Register>
        }
    ],
  


  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
 <RouterProvider router={router} />
 </AuthProvider>
  </React.StrictMode>,
)
