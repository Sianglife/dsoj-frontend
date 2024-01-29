import { Home } from "@/page/Home";
import { createBrowserRouter } from "react-router-dom";


const routes = [
    {
        path: "/",
        element: <Home />
    }
]

export const router = createBrowserRouter(routes);