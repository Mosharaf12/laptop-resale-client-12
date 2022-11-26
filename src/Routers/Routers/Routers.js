import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import LayoutDashboard from "../../layout/LayoutDashboard";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import Myorders from "../../Pages/Dashboard/Myorders/Myorders";
import DetailsCard from "../../Pages/Home/DetailsCard/DetailsCard";
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
                path: '/laptop/:id',
                loader: async({params})=> fetch(`http://localhost:5000/laptop/${params.id}`),
                element: <DetailsCard></DetailsCard>
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
    },
    {
        path:'/dashboard',
        errorElement: <ErrorPage></ErrorPage>,
        element: <LayoutDashboard></LayoutDashboard>,
        children:[
            {
                path:'/dashboard',
                element:<Myorders></Myorders>
            },
            {
                path:'/dashboard/addproduct',
                element:<AddProduct></AddProduct>
            },
         
        ]
    }
])