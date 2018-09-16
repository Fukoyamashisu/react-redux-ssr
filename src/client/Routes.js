import React from 'react';
import App from './App'
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import NotFounPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';


export default [
  {
    ...App,
    routes:[
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        ...AdminsListPage,
        path: '/admins'
      },
      {
        ...UsersListPage,
        path:'/users'
      },
      {
        ...NotFounPage
      }
    ]
  }
]
