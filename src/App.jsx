import { Suspense, useState } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Blog,
  Cart,
  Catalog,
  Childs,
  Delivery,
  Discount,
  ForBeautyAndHealth,
  ForHome,
  Home,
  Layout,
  Licvidation,
  Login,
  Man,
  Optovic,
  Policity,
  Register,
  Return_items,
  Reviews,
} from "./routes/router";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<div className="loader"></div>}>
          <Layout />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<div className="loader"></div>}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/catalog",
          element: (
            <Suspense fallback={<div className="loader"></div>}>
              <Catalog />
            </Suspense>
          ),
        },
        {
          path: "/catalog/man",
          element: (
            <Suspense fallback={<div className="loader"></div>}>
              <Man />
            </Suspense>
          ),
        },
        {
          path: "/login",
          element: (
            <Suspense fallback={<div className="loader"></div>}>
              <Login />
            </Suspense>
          ),
        },
        {
          path: "/register",
          element: (
            <Suspense fallback={<div className="loader"></div>}>
              <Register />
            </Suspense>
          ),
        },
        {
          path: "/catalog/childs",
          element: (
            <Suspense fallback={<div className="loader"></div>}>
              <Childs />
            </Suspense>
          ),
        },
        {
          path: "/cart",
          element: (
            <Suspense fallback={<div className="loader"></div>}>
              <Cart />
            </Suspense>
          ),
        },
        {
          path: "/catalog/for_home",
          element: (
            <Suspense fallback={<div className="loader"></div>}>
              <ForHome />
            </Suspense>
          ),
        },
        {
          path: "/catalog/for_beauty_and_health",
          element: (
            <Suspense fallback={<div className="loader"></div>}>
              <ForBeautyAndHealth />
            </Suspense>
          ),
        },
        {
          path: "/catalog/discounts",
          element: (
            <Suspense fallback={<div className="loader"></div>}>
              <Discount />
            </Suspense>
          ),
        },
        {
          path: "/catalog/likvidation",
          element: (
            <Suspense fallback={<div className="loader"></div>}>
              <Licvidation />
            </Suspense>
          ),
        },
        {
          path: "/about",
          element: (
            <Suspense fallback={<div className="loader"></div>}>
              <About />
            </Suspense>
          ),
        },
        {
          path: "/delivery",
          element: (
            <Suspense fallback={<div className="loader"></div>}>
              <Delivery />
            </Suspense>
          )
        },
        {
          path: "/blog",
          element: (
            <Suspense fallback={<div className="loader"></div>}>
              <Blog />
            </Suspense>
          )
        },
        {
          path: "optovic",
          element: (
            <Suspense fallback={<div className="loader"></div>}>
              <Optovic />
            </Suspense>
          )
        },
        {
          path: "/return",
          element: (
            <Suspense fallback={<div className="loader"></div>}>
              <Return_items />
            </Suspense>
          )
        },
        {
          path: "/policity",
          element: (
            <Suspense fallback={<div className="loader"></div>}>
              <Policity />
            </Suspense>
          )
        },
        {
          path: "/reviews",
          element: (
            <Suspense fallback={<div className="loader"></div>}>
              <Reviews   />
            </Suspense>
          )
        }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
