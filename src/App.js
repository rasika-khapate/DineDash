import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUs from "./components/ContantUs";
import { ErrorPage } from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import appStore from "./redux/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";

const Applayout = () => {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    // make an api call to get username

    const data = {
      name: "Rasika Khapate",
    };
    setUserName(data.name);
  }, []);

  return (
    // Default
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        {/* Rasika Khapate */}
        <div className="app">
          <Header />
          <Outlet />
          {/* keyword */}
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
const Grocery = lazy(() => import("./components/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            {" "}
            <Grocery />
          </Suspense>
        ),
      },
       {
        path: "/cart",
        element: <Cart />,
      }
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
