import Products from "../Components/Products/Products";
import DashboardLayout from "../Layouts/DashboardLayout";
import Main from "../Layouts/Main";
import Blog from "../Pages/Blog/Blog";
import AllUsers from "../Pages/Dashboard/AllUsers";
import MyOrder from "../Pages/Dashboard/MyOrder";
import Payment from "../Pages/Dashboard/Payment";
import Login from "../Pages/Form/Login";
import Register from "../Pages/Form/Register";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <Products></Products>,
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://ahsell-server.vercel.app/category/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/my-order",
        element: <MyOrder></MyOrder>,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },

      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`${process.env.REACT_APP_URL}/bookings/${params.id}`),
      },
    ],
  },
]);

export default routes;
