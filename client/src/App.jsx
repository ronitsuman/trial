import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './pages/Index'
import ResponsiveDesign from './pages/ResponsiveDesign'
import Animation from './pages/cssmodule/Animation'
import Framer from './pages/Framer'


const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Index/>


    },
    {
      path:"/responsive",
      element:<ResponsiveDesign/>
    },
    {
      path:"/animation",
      element:<Animation/>
    },
    {
      path:"/framer",
      element:<Framer/>
    },
  ]);
  return (
    <RouterProvider router={router}/>
  )
}

export default App