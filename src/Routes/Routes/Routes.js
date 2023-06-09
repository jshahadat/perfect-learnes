import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Category from '../../Pages/Category/Category'
import Topic from "../../Pages/Sheared/Topic/Topic";
import Faq from "../../Pages/Sheared/Faq/Faq"

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://assignments-tenth-server.vercel.app/topic')

            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://assignments-tenth-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/premium/:id',
                element: <PrivateRoute><Topic></Topic></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignments-tenth-server.vercel.app/premium/${params.id}`)

            },
            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])