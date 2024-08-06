import {
  AppShell,
  Box,
  Button,
  Group,
  Image,
  Stack,
  Title
} from "@mantine/core";
import { Helmet } from "react-helmet";
import {
  FaApple as AppleIcon,
  FaGithub as GitHubIcon,
  FaGoogle as GoogleIcon,
  FaMicrosoft as MicrosoftIcon
} from "react-icons/fa";
import classes from "./Login.module.css";

export function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Login | Chorelist</title>
      </Helmet>
      <AppShell className={classes.shell} p="md">
        <Box bg="white" className={classes.form} p="md">
          <Stack gap="lg">
            <Group>
              <Image height={40} src="/logo.png" />
              <Title>Chorelist</Title>
            </Group>
            <Stack gap={8}>
              <Button
                justify="space-between"
                leftSection={<GoogleIcon />}
                rightSection={<span />}
                size="lg"
              >
                Login with Google
              </Button>
              <Button
                justify="space-between"
                leftSection={<MicrosoftIcon />}
                rightSection={<span />}
                size="lg"
                variant="light"
              >
                Login with Microsoft
              </Button>
              <Button
                justify="space-between"
                leftSection={<AppleIcon />}
                rightSection={<span />}
                size="lg"
                variant="light"
              >
                Login with Apple
              </Button>
              <Button
                justify="space-between"
                leftSection={<GitHubIcon />}
                rightSection={<span />}
                size="lg"
                variant="light"
              >
                Login with GitHub
              </Button>
            </Stack>
          </Stack>
        </Box>
      </AppShell>
    </>
  );
}
