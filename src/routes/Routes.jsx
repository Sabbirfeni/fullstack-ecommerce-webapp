import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../components/layout/DashboardLayout";
import Layout from "../components/layout/Layout";
import { AllProducts, Cart, Home, NoPage, Order } from "../pages";
import AddProduct from "../pages/admin/pages/AddProduct";
import TotalOrders from "../pages/admin/pages/TotalOrders";
import TotalProducts from "../pages/admin/pages/TotalProducts";
import TotalUsers from "../pages/admin/pages/TotalUsers";
import UpdateProduct from "../pages/admin/pages/UpdateProduct";
import Overview from "../pages/admin/pages/overview/Overview";
import ProductInfo from "../pages/productInfo/ProductInfo";
import Login from "../pages/registration/Login";
import Signup from "../pages/registration/Signup";
import AllReviews from "../pages/reviews/AllReviews";
import { PrivateRouteForAdmin, PrivateRouteForUser } from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allproducts",
        element: <AllProducts />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/reviews",
        element: <AllReviews />,
      },
      {
        path: "/order",
        element: (
          <PrivateRouteForUser>
            <Order />
          </PrivateRouteForUser>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRouteForAdmin>
            <DashboardLayout />
          </PrivateRouteForAdmin>
        ),
        children: [
          {
            path: "overview",
            element: <Overview />,
          },
          {
            path: "all-products",
            element: <TotalProducts />,
          },
          {
            path: "all-orders",
            element: <TotalOrders />,
          },
          {
            path: "all-users",
            element: <TotalUsers />,
          },
          {
            path: "updateproduct",
            element: <UpdateProduct />,
          },
          {
            path: "addproduct",
            element: <AddProduct />,
          },
        ],
      },
      {
        path: "/productinfo/:id",
        element: <ProductInfo />,
      },

      {
        path: "/*",
        element: <NoPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
