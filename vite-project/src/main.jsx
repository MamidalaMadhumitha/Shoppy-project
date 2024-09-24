
import { StrictMode } from 'react';
import {createRoot} from "react-dom/client"
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import {lazy,Suspense} from "react";

const Cartitem = lazy(()=>import("./Components/Cartitem.jsx"))
const Productlist = lazy(()=> import("./Components/Productlist.jsx"));
const Notfound = lazy(()=>import("./Components/Notfound.jsx"));
const Cart = lazy(()=> import("./Components/Cart.jsx"));
const Productitem = lazy(()=>import("./Components/ProductItem.jsx"))



const approuter = createBrowserRouter([

  {
  
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element:(
          <Suspense fallback = {<h2>Loading...</h2>}>
            <Productlist/>
          </Suspense>
        ),     
      },         
      {
        path: "/Cart",
        element:(
          <Suspense fallback={<h2>Loading...</h2>}>
            <Cart />,
          </Suspense>
        ),
      },
      {
        path:"/product/:id",
        element:(
          <Suspense fallback ={<h2>Loading...</h2>}>
            <Productitem />,
          </Suspense>
        ),
      },
      {
        path:"cartitem/:id",
        element:(
          <Suspense fallback={<h2>Loading...</h2>}>
            <Cartitem/>
          </Suspense>
        ),
      },

    ],
    errorElement:(
      <Suspense fallback={<h2>Loading...</h2>}>
          <Notfound />,
      </Suspense>
    ) ,
  },


]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router ={approuter}/>
  </StrictMode>
);
