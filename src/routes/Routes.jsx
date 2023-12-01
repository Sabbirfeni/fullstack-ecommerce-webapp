import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { AllProducts, Cart, Dashboard, Home, NoPage, Order } from "../pages";

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
                path: '/*',
                element: <NoPage/>
            }
        ]
    }
])

export default router;