
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.tsx'
import Information from './components/Information/Information.tsx'
import About from './components/About/About.tsx'
import ProductCard from './components/Card/Card.tsx'
import Product from './components/Product/Product.tsx'



const router = createBrowserRouter([
   {
      path: "/kitchenX/",
      element: <App/>,
      children: [
         {
            path: "/kitchenX/",
            element: <Home/>
         },
         {
            path: "/kitchenX/information",
            element: <Information/>
         },
         {
            path: "/kitchenX/About",
            element: <About/>
         },
         {
            path: "/kitchenX/Product",
            element: <Product/>
         },

      ],
   },
]);

  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <RouterProvider router={router}/>
   </React.StrictMode>
   

)
