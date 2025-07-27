import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Jobs from "../components/Jobs";
import PrivateRoute from "./PrivateRoute";
import JobDetails from "../components/JobDetails";
import ApplyJob from "../components/ApplyJob";
import MyApplications from "../components/MyApplications";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/jobs',
        element: <Jobs></Jobs>
      },
      {
        path: '/jobs/details/:id',
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path: '/application/apply/:id',
        element: <PrivateRoute><ApplyJob></ApplyJob></PrivateRoute>
      },
      {
        path: '/application/me',
        element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'userProfile',
        element: <Profile></Profile>
      }
    ]
  },
]);

export default router;