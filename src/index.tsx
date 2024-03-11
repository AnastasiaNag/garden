import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Goods from "./pages/Goods";
import Works from "./pages/Works";
import WorkItem from "./pages/WorkItem";
import Admin from "./pages/Admin";
import AdminWorks from "./pages/AdminWorks";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from './redux/store'
import { Provider } from 'react-redux'
import './index.scss'
import MainPages from "./pages/MainPages";


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);



const routes = createBrowserRouter([
  {
      path: '/',
      element: <MainPages />,
      children: [
          {
              path: '/',
              element: <Home />,
          },
          {
            path: "/goods",
            element: <Goods />,
          },
          {
            path: "/works",
            element: <Works />,
            children: [
              {
                path: "/works/:id",
                element: <WorkItem />,
              },
            ]
          },
          {
            path: "/admin",
            element: <Admin />,
          },
            {
              path: "/admin/works",
              element: <AdminWorks />,
            }
      ],
  },
]);


// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/goods",
//     element: <Goods />,
//   },
//   {
//     path: "/works",
//     element: <Works />,
//     children: [
//       {
//         path: "/works/:id",
//         element: <WorkItem />,
//       },
//     ]
//   },
//   {
//     path: "/admin",
//     element: <Admin />,
//   },
//     {
//       path: "/admin/works",
//       element: <AdminWorks />,
//     }
  
// ]);

  root.render(
    <Provider store={store}>
        <RouterProvider router={routes} />
    </Provider>
);

  document.getElementById('root')
