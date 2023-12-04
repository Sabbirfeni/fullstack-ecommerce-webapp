import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { AllProducts, Cart, Dashboard, Home, NoPage, Order } from "../pages";
import Login from "../pages/registration/Login";
import Signup from "../pages/registration/Signup";
import ProductCard from "../components/productCard/ProductCard";
import ProductInfo from "../pages/productInfo/ProductInfo";
import AddProduct from "../pages/admin/pages/AddProduct";
import UpdateProduct from "../pages/admin/pages/UpdateProduct";
import { PrivateRouteForAdmin, PrivateRouteForUser } from "./PrivateRoutes";

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
                path: '/allproducts',
                element: <AllProducts/>
            },
            {
                path: '/cart',
                element: <Cart/>
            },
            {
                path: '/order',
                element: (
                        <PrivateRouteForUser>
                            <Order/>
                        </PrivateRouteForUser>
                    )
            },
            {
                path: '/dashboard',
                element: (
                        <PrivateRouteForAdmin>
                            <Dashboard/>
                        </PrivateRouteForAdmin>
                    )
            },
            {
                path: '/productinfo/:id',
                element: <ProductInfo/>
            },
            {
                path: '/addproduct',
                element: (
                    <PrivateRouteForAdmin>
                        <AddProduct/>
                    </PrivateRouteForAdmin>
                )
            },
            {
                path: '/updateproduct',
                element: (
                    <PrivateRouteForAdmin>
                        <UpdateProduct/>
                    </PrivateRouteForAdmin>
                )
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