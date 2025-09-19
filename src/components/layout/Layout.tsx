import type React from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
    return (
        <>
            <h1>Recipe finder</h1>
            <Outlet />
        </>
    )
}

export default Layout;