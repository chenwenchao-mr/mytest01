import { Fragment } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Page01 from "@/pages/page01";
import Page02 from "@/pages/page02";
import Home from "@/pages/home";
import Login from "@/pages/login";
import Layout from "@/components/layout";

export const menusConfig = [
  { path: "/admin/home", name: "home", element: <Home /> },
  { path: "/admin/page01", name: "page01", element: <Page01 /> },
  { path: "/admin/page02", name: "page02", element: <Page02 /> },
];

export const routeConfig = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <Layout />,
    children: menusConfig,
  },
  {
    path: "/",
    element: <Navigate to="/admin/home" />,
  },
];

export const CreateRoute = () => {
  const element = useRoutes(routeConfig);
  return <Fragment>{element}</Fragment>;
};
