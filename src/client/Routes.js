import React from "react";
import App from "./app";
import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";
import AdminsListPage from "./pages/AdminsListPage";
import NotFoundPage from "./pages/NotfoundPage";

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true
      },
      {
        ...AdminsListPage,
        path: "/admins"
      },
      {
        ...UsersListPage,
        path: "/users"
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
