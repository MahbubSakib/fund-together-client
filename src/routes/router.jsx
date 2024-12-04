import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Error404 from "../pages/Error404/Error404";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddNewCampaign from "../pages/AddNewCampaign/AddNewCampaign";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
    },
    {
        path: "/addNewCampaign",
        element: <AddNewCampaign></AddNewCampaign>,
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
        path: "*",
        element: <Error404></Error404>
    }
]);

export default router;