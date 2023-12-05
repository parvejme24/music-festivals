import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Layout from "../Layout/Layout";
import AboutUs from "../Pages/AboutUs/AboutUs";
import BlogDetails from "../Pages/Blogs/BlogDetails";
import Campaign from "../Pages/Campaign/Campaign";
import ContactUs from "../Pages/ContactUs/ContactUs";
import FAQs from "../Pages/FAQs/FAQs";
import Home from "../Pages/Home/Home";
import Lineup from "../Pages/Lineup/Lineup";
import Login from "../Pages/Register&Login/Login";
import Register from "../Pages/Register&Login/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Blogs from "./../Pages/Blogs/Blogs";
import PrivetRout from "./../PrivetRout/PrivetRout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/service/:id",
        element: (
          <PrivetRout>
            <ServiceDetails></ServiceDetails>
          </PrivetRout>
        ),
        loader: () => fetch("/services.json"),
      },
      {
        path: "/lineup",
        element: <Lineup></Lineup>,
      },
      {
        path: "/FAQs",
        element: <FAQs></FAQs>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails></BlogDetails>,
        loader: () => fetch("/blogs.json"),
      },
      {
        path: "/campaign",
        element: <Campaign></Campaign>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
