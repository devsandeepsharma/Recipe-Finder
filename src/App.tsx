import type React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Recipes from "./pages/Recipes";

// TypeScript automatically infers a function component as a function
// that returns a JSX.Element. If we want to make it explicit, we can use React.FC.
const App: React.FC = () => {

    // TypeScript infers the correct type automatically
    // The inferred type is the router object returned by createBrowserRouter
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/recipes",
                    element: <Recipes />
                },
            ]
        }
    ])

    return <RouterProvider router={router} />
}

export default App;