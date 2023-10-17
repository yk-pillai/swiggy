import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UseRefExample from "./components/useRefExample";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import Store from "./utils/Store";
import Cart from "./components/Cart";


const Instamart = lazy(()=> import('./components/Instamart'));

const AppLayout = () => {
  const user = useContext(UserContext);
  const [userContextProvider, setUserContextProvider] = useState(user);
  useEffect(() => {
    setUserContextProvider({
      user: {
        name: "yk",
        email: "yedhu.pillai333@gmail.com",
      },
    });
  },[])
  return (
    <Provider store={Store}>
      <UserContext.Provider value={userContextProvider}>
        <Header />
        {/* <UseRefExample /> */}
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
