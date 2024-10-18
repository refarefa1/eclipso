import { createBrowserRouter } from "react-router-dom";
import { App } from "./views/App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
])
