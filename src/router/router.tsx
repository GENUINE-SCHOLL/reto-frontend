import { createBrowserRouter } from "react-router";
import { LayoutPage } from "../site/layout/LayoutPage";
import { InicioPage } from "../site/pages/InicioPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPage />,
        children: [
            {
                path: ""
                ,element: <InicioPage />
            }
        ]
    },
]);