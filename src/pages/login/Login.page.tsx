import { AppShell } from "@mantine/core";
import { Helmet } from "react-helmet";

export function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Login | Chorelist</title>
      </Helmet>
      <AppShell.Main>Login Page</AppShell.Main>
    </>
  );
}
