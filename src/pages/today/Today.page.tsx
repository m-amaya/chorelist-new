import { AppShell } from "@mantine/core";
import { Helmet } from "react-helmet";

export function TodayPage() {
  return (
    <>
      <Helmet>
        <title>Today | Chorelist</title>
      </Helmet>
      <AppShell.Main>Today Page</AppShell.Main>
    </>
  );
}
