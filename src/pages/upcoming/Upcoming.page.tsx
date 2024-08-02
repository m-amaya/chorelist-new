import { AppShell } from "@mantine/core";
import { Helmet } from "react-helmet";

export function UpcomingPage() {
  return (
    <>
      <Helmet>
        <title>Upcoming | Chatter</title>
      </Helmet>
      <AppShell.Main>Upcoming Page</AppShell.Main>
    </>
  );
}
