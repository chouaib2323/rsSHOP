import React, { useEffect } from 'react'
import Home from './componentes/Home'
import Contact from './componentes/Contact'
import Products from './componentes/Products'
import About from './componentes/About'
import Checkout from './componentes/Checkout'
import Login from './componentes/Login'
import Register from './componentes/Register'
import Userinfo from './componentes/Userinfo'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App  () {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
     
    },
    {
     path: "/Products",
     element: <Products />,
    },
    
    {
      path: "/Contact",
      element: <Contact />,
     },
     {
      path: "/About",
      element: <About />,
     },
     {
      path: "/Login",
      element: <Login />,
     },
     {
      path: "/Register",
      element: <Register />,
     },
     {
      path: "/Checkout",
      element: <Checkout />,
     },
     {
      path: "/Userinfo",
      element: <Userinfo />,
     },
  ])


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App