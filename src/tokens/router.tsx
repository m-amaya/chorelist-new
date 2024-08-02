import { Layout } from "@src/components/layout";
import { ListPage } from "@src/pages/list";
import { LoginPage } from "@src/pages/login";
import { TodayPage } from "@src/pages/today";
import { UpcomingPage } from "@src/pages/upcoming";
import { UsersPage } from "@src/pages/users";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "today",
        element: <TodayPage />
      },
      {
        path: "upcoming",
        element: <UpcomingPage />
      },
      {
        path: "list",
        element: <ListPage />
      },
      {
        path: "users",
        element: <UsersPage />
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  }
]);
