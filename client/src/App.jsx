import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './pages/Index'
import ResponsiveDesign from './pages/ResponsiveDesign'
import Animation from './pages/cssmodule/Animation'


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
  ]);
  return (
    <RouterProvider router={router}/>
  )
}

export default App