import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./Layout/Layout"
 
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
                // {
                //     path: 
                // }
            ]
        }
    ]
)
