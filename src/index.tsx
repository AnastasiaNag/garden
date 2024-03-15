import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Goods from './pages/Goods';
import Works from './pages/Works';
import WorkItem from './pages/WorkItem';
import Admin from './pages/AdminMain/Admin';
import AdminWorks from './pages/AdminMain/AdminWorks';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import './index.scss';
import MainPages from './pages/MainPages';
import Login from './pages/AdminMain/Login';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const isAuthenticated = Boolean(localStorage.getItem('isAuthenticated'));

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
        path: '/goods',
        element: <Goods />,
      },
      {
        path: '/works',
        element: <Works />,
      },
      {
        path: '/works/:id',
        element: <WorkItem />,
      },
    ],
  },
  {
    path: '/admin',
    element: <Login />,
  },
  {
    path: '/admin/panel',
    element: isAuthenticated ? <Admin /> : <Login />,
  },
  {
    path: '/admin/works',
    element: isAuthenticated ? <AdminWorks /> : <Login />,
  },
]);

root.render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);

document.getElementById('root');
