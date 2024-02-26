import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from './redux/store'
import { Provider } from 'react-redux'
import './index.scss'


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }
]);

  root.render(
    <Provider store={store}>
        <RouterProvider router={routes} />
    </Provider>
);

  document.getElementById('root')
