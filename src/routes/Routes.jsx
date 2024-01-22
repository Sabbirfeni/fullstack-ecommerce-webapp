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
import PageTransitionWrapper from "../wrapper/pageTransitionWrapper/PageTransitionWrapper";
import { PrivateRouteForAdmin, PrivateRouteForUser } from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <PageTransitionWrapper>
            <Home />
          </PageTransitionWrapper>
        ),
      },
      {
        path: "/allproducts",
        element: (
          <PageTransitionWrapper>
            <AllProducts />
          </PageTransitionWrapper>
        ),
      },
      {
        path: "/cart",
        element: (
          <PageTransitionWrapper>
            <Cart />
          </PageTransitionWrapper>
        ),
      },
      {
        path: "/reviews",
        element: (
          <PageTransitionWrapper>
            <AllReviews />
          </PageTransitionWrapper>
        ),
      },
      {
        path: "/order",
        element: (
          <PrivateRouteForUser>
            <PageTransitionWrapper>
              <Order />
            </PageTransitionWrapper>
          </PrivateRouteForUser>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRouteForAdmin>
            <PageTransitionWrapper>
              <DashboardLayout />
            </PageTransitionWrapper>
          </PrivateRouteForAdmin>
        ),
        children: [
          {
            path: "overview",
            element: (
              <PageTransitionWrapper>
                <Overview />
              </PageTransitionWrapper>
            ),
          },
          {
            path: "all-products",
            element: (
              <PageTransitionWrapper>
                <TotalProducts />
              </PageTransitionWrapper>
            ),
          },
          {
            path: "all-orders",
            element: (
              <PageTransitionWrapper>
                <TotalOrders />
              </PageTransitionWrapper>
            ),
          },
          {
            path: "all-users",
            element: (
              <PageTransitionWrapper>
                <TotalUsers />
              </PageTransitionWrapper>
            ),
          },
          {
            path: "updateproduct",
            element: (
              <PageTransitionWrapper>
                <UpdateProduct />
              </PageTransitionWrapper>
            ),
          },
          {
            path: "addproduct",
            element: (
              <PageTransitionWrapper>
                <AddProduct />
              </PageTransitionWrapper>
            ),
          },
        ],
      },
      {
        path: "/productinfo/:id",
        element: (
          <PageTransitionWrapper>
            <ProductInfo />
          </PageTransitionWrapper>
        ),
      },

      {
        path: "/*",
        element: (
          <PageTransitionWrapper>
            <NoPage />
          </PageTransitionWrapper>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <PageTransitionWrapper>
        <Login />
      </PageTransitionWrapper>
    ),
  },
  {
    path: "/signup",
    element: (
      <PageTransitionWrapper>
        <Signup />
      </PageTransitionWrapper>
    ),
  },
]);

export default router;
