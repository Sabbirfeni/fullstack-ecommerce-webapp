import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { AllProducts, Cart, Dashboard, Home, NoPage, Order } from "../pages";
import Login from "../pages/registration/Login";
import Signup from "../pages/registration/Signup";
import ProductInfo from "../pages/productInfo/ProductInfo";
import AddProduct from "../pages/admin/pages/AddProduct";
import UpdateProduct from "../pages/admin/pages/UpdateProduct";
import { PrivateRouteForAdmin, PrivateRouteForUser } from "./PrivateRoutes";
import DashboardLayout from "../components/layout/DashboardLayout";
import TestingDashboad from "../pages/admin/TestingDashboad";
import TotalProducts from "../pages/admin/pages/TotalProducts";
import TotalOrders from "../pages/admin/pages/TotalOrders";
import TotalUsers from "../pages/admin/pages/TotalUsers";

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
                            <DashboardLayout/>
                        </PrivateRouteForAdmin>
                    )
                ,
                children: [
                    {
                        path: 'overview',
                        element: <TestingDashboad/>
                    },
                    {
                        path: 'all-products',
                        element: <TotalProducts/>
                    },
                    {
                        path: 'all-orders',
                        element: <TotalOrders/>
                    },
                    {
                        path: 'all-users',
                        element: <TotalUsers/>
                    }
                ]
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