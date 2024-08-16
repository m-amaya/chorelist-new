import {
  AppShell,
  Box,
  Button,
  Group,
  Image,
  Stack,
  Text,
  Title
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { User, useUserStore } from "@src/stores/user.store";
import { auth, githubProvider, googleProvider } from "@src/tokens/firebaseApp";
import { signInWithPopup } from "firebase/auth";
import { Helmet } from "react-helmet";
import { FaGithub as GitHubIcon, FaGoogle as GoogleIcon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";

export function LoginPage() {
  const navigateTo = useNavigate();
  const store = useUserStore();

  const handleLogin = async (provider: User["provider"]) => {
    const isGoogleProvider = provider === "google";

    try {
      const { user } = await signInWithPopup(
        auth,
        isGoogleProvider ? googleProvider : githubProvider
      );

      store.updateDisplayName(user.displayName ?? "");
      store.updateEmail(user.email ?? "");
      store.updatePhotoUrl(user.photoURL ?? "");
      store.updateProvider(provider);
      store.updateUid(user.uid);
      navigateTo("/today");
    } catch (error) {
      notifications.show({
        title: "Login Error",
        message: `${error}`
      });
    }
  };

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
              <Title c="black">Chorelist</Title>
            </Group>
            <Stack gap={8}>
              <Button
                c="shamrock.7"
                justify="space-between"
                leftSection={<GoogleIcon />}
                onClick={() => handleLogin("google")}
                rightSection={<span />}
                size="lg"
                variant="light"
              >
                Login with Google
              </Button>
              <Button
                c="shamrock.7"
                justify="space-between"
                leftSection={<GitHubIcon />}
                onClick={() => handleLogin("github")}
                rightSection={<span />}
                size="lg"
                variant="light"
              >
                Login with GitHub
              </Button>
              <Text c="black" size="sm">
                DISCLAIMER: This is a demo environment. No personal information
                is ever stored or shared with a third party.
              </Text>
            </Stack>
          </Stack>
        </Box>
      </AppShell>
    </>
  );
}
