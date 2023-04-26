import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import cartProductsLoader from './loaders/CartProductsLoader';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './providers/AuthProvider';
import OrderReview from './components/OrderReview/OrderReview';
import Profile from './components/Profile/Profile';
import PrivateRoute from './routes/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Shop />
      },
      {
        path: '/order',
        element: <Orders></Orders>,
        loader: cartProductsLoader,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: "/order-review",
        element: <PrivateRoute><OrderReview></OrderReview></PrivateRoute>
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
