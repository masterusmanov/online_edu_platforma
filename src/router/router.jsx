import * as React from "react";
// import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";

import Layout from "../Layout/Layout";
import Main from "../Pages/Main/Main";
import MyCourses from "../Pages/MyCourses/MyCourses"
import Login from "../Pages/Login/Login";
import Courses from "../Pages/Courses/Courses";
import MyVideos from "../Pages/MyVideos/MyVideos";
import Sertificate from "../Pages/Sertificate/Sertificate";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([

    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Main />,
            },
            {
                path: "/my_courses",
                element: <MyCourses />,
            },
            {
                path: "/courses",
                element: <Courses />,
            },
            {
                path: "/course_video",
                element: <MyVideos />,
            },
            {
                path: "/sertificate",
                element: <Sertificate />,
            },

        ]
    },
    {
        path: "/login",
        element: <Login />
    }
]);

export default router;