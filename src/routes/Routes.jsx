import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { AllProducts, Cart, Dashboard, Home, NoPage, Order } from "../pages";
import Login from "../pages/registration/Login";
import Signup from "../pages/registration/Signup";
import ProductCard from "../components/productCard/ProductCard";
import ProductInfo from "../pages/productInfo/ProductInfo";
import AddProduct from "../pages/admin/pages/AddProduct";
import UpdateProduct from "../pages/admin/pages/UpdateProduct";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/all-products',
                element: <AllProducts/>
            },
            {
                path: '/cart',
                element: <Cart/>
            },
            {
                path: '/order',
                element: <Order/>
            },
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/productinfo/:id',
                element: <ProductInfo/>
            },
            {
                path: '/addproduct',
                element: <AddProduct/>
            },
            {
                path: '/updateproduct',
                element: <UpdateProduct/>
            },
            {
                path: '/*',
                element: <NoPage/>
            }
        ]
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/signup',
        element: <Signup/>
    }
])

export default router;