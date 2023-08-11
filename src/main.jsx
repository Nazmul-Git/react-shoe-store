import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Products from './Components/Products/Products';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';

const router=createBrowserRouter([
         {
          path:'/',
          element:<Home></Home>,
          children:[
            {
              path:'/products',
              element:<Products></Products>
            },
            {
              path:'/about',
              element: <About></About>
            },
            {
              path:'/services',
              element:<Services></Services>
            },
            {
              path:'/contact',
              element:<Contact></Contact>
            }
          ]
         }
         
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
