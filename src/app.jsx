import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx"; 

const Appcomp = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <Appcomp />,
        children : [
            {
                path : "/WeatherApp",
                element : <Body />
            },
            {
                path : "/WeatherApp/about",
                element : <About />
            },
            {
                path : "/WeatherApp/contact",
                element : <Contact />
            }
        ],
        errorElement : "Page not found"
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router= { appRouter} />)