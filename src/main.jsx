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
