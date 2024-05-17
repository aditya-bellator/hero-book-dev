import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../common/MainLayout/index.jsx"
import Home from "../pages/home/Home.jsx";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
   
      ],
    },
  ]);