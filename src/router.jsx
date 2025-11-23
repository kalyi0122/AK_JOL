import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
 
const myRouter = createBrowserRouter(
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
