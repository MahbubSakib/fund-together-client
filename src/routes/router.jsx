import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Error404 from "../pages/Error404/Error404";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddNewCampaign from "../pages/AddNewCampaign/AddNewCampaign";
import AllCampaign from "../pages/AllCampaign/AllCampaign";
import CampaignDetails from "../pages/CampaignDetails/CampaignDetails";
import MyCampaign from "../pages/MyCampaign/MyCampaign";
import { getAuth } from "firebase/auth";
import PrivateRoute from "./PrivateRoute";

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
        path: "/allCampaign",
        element: <AllCampaign></AllCampaign>,
        loader: () => fetch('http://localhost:5000/campaigns')
    },
    {
        path: "/details/:id",
        element: <CampaignDetails></CampaignDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`)
    },
    {
        path: "/myCampaigns",
        element: (
            <PrivateRoute>
                <MyCampaign />
            </PrivateRoute>
        ),
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