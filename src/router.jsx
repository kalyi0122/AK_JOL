import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./Layout/Layout"
import Wish from "./wish/Wish"

export const myRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "",
                    element: <Home />
                },
                {
                    path: "/product-detail",
                    element: <Wish />
                }
            ]
        }
    ]
)
