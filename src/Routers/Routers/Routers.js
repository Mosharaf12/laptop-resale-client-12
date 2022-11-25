import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import FilterByCategorey from "../../Pages/Home/FilterByCategorey/FilterByCategorey";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import ErrorPage from "../../Shared/ErrorPage";



export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/usedLaptop/:categorey',
                loader:async({params})=> await fetch(`http://localhost:5000/usedLaptop/${params.categorey}`),
                element: <FilterByCategorey></FilterByCategorey>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
])