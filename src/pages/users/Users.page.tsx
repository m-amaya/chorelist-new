import { AppShell } from "@mantine/core";
import { Helmet } from "react-helmet";

export function UsersPage() {
  return (
    <>
      <Helmet>
        <title>Users | Chorelist</title>
      </Helmet>
      <AppShell.Main>Users Page</AppShell.Main>
    </>
  );
}
