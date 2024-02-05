import Home from "@/page/Home";
import Problem from "@/page/Problem";
import Details from "@/page/Details";
import { createBrowserRouter } from "react-router-dom";
 

// TODO: always occurred an error 404 when routing, but the page rendering is still working
const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/problem",
        element: <Problem />
    },
    {
        path: "/problem/:id",
        element: <Details />
    }
]

export const router = createBrowserRouter(routes);