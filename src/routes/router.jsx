import { createBrowserRouter } from "react-router-dom";
import DefaultOutlet from '../outlet/DefaultOutlet';

// AUTHENTICATED ROUTES;
import Home from '../pages/authRoutes/homescreen';
import Insights from '../pages/authRoutes/insights';
import Trades from '../pages/authRoutes/trades';
import MySaudas from '../pages/authRoutes/mysaudas';
import Newsfeed from '../pages/authRoutes/newsfeed';

// UNAUTHENTICATED ROUTES;
import Login from '../pages/unauthRoutes/login';
import Otp from '../pages/unauthRoutes/otp';

export function getApplicationRoutes() {
    const applicationRoutes = createBrowserRouter([
        {
            path: "/",
            element: <DefaultOutlet />,
            children: [
                {
                    path: "/",
                    element: <DefaultOutlet />,
                    children: [
                        {
                            path: "homescreen",
                            element: <Home />
                        }
                    ]
                },
                {
                    path: "login",
                    element: <Login />
                },
                {
                    path: "otp/:phone_number",
                    element: <Otp />
                },
                {
                    path: "insights",
                    element: <Insights />
                },
                {
                    path: "trades",
                    element: <Trades />
                },
                {
                    path: "mysaudas",
                    element: <MySaudas />
                },
                {
                    path: "newsfeed",
                    element: <Newsfeed />
                }
            ]
        },
    ]);

    return applicationRoutes;
}