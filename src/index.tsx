import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Goods from './pages/Goods';
import Works from './pages/Works';
import Articles from './pages/Articles';
import WorkItem from './pages/WorkItem';
import ArticleItem from './pages/ArticleItem';
import Admin from './pages/AdminMain/Admin';
import AdminWorks from './pages/AdminMain/AdminWorks';
import AdminArticles from './pages/AdminMain/AdminArticles';
import AdminGoods from './pages/AdminMain/AdminGoods';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import './index.scss';
import MainPages from './pages/MainPages';
import Login from './pages/AdminMain/Login';
import GoodItem from './pages/GoodItem';
import AdminEmployees from './pages/AdminMain/AdminEmployees';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'

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
        path: '/goods/:id',
        element: <GoodItem />,
      },
      {
        path: '/works',
        element: <Works />,
      },
      {
        path: '/works/:id',
        element: <WorkItem />,
      },
      {
        path: '/articles',
        element: <Articles />,
      },
      {
        path: '/articles/:id',
        element: <ArticleItem/>,
      }
    ],
  },
  {
    path: '/admin',
    element:  isAuthenticated ?<Navigate to="/admin/panel" replace /> : <Login />,
  },
  {
    path: '/admin/panel',
    element: isAuthenticated ? <Admin /> : <Navigate to="/admin" replace />,
  },
  {
    path: '/admin/works',
    element: isAuthenticated ? <AdminWorks/> : <Navigate to="/admin" replace />,
  },
  {
    path: '/admin/goods',
    element: isAuthenticated ? <AdminGoods /> : <Navigate to="/admin" replace />,
  },
  {
    path: '/admin/articles',
    element: isAuthenticated ?<AdminArticles /> : <Navigate to="/admin" replace />,
  },
  {
    path: '/admin/employees',
    element: isAuthenticated ?<AdminEmployees /> : <Navigate to="/admin" replace />,
  }
]);

root.render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);

document.getElementById('root');
