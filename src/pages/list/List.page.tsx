import { AppShell } from "@mantine/core";
import { Helmet } from "react-helmet";

export function ListPage() {
  return (
    <>
      <Helmet>
        <title>List | Chorelist</title>
      </Helmet>
      <AppShell.Main>List Page</AppShell.Main>
    </>
  );
}
