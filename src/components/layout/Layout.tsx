import { AppShell, Container, Group, Image, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Navbar } from "@src/components/layout/Navbar";
import { ThemeSwitch } from "@src/components/layout/ThemeSwitch";
import { ToggleSidebarAction } from "@src/components/layout/ToggleSidebarAction";
import { Outlet } from "react-router-dom";

export function Layout() {
  const [opened, { toggle }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 70 }}
      navbar={{
        collapsed: { mobile: !opened, desktop: !opened },
        breakpoint: "sm",
        width: 250
      }}
    >
      <AppShell.Header withBorder={false}>
        <Group h="100%" justify="space-between" p="md">
          <Group>
            <ToggleSidebarAction opened={opened} toggle={toggle} />
            <Group gap={8}>
              <Image h={30} src="/logo.png" alt="Logo image" />
              <Text ff="heading" fw={600} size="xl">
                Chorelist
              </Text>
            </Group>
          </Group>
          <ThemeSwitch />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar px="sm" py="md" withBorder={false}>
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main>
        <Container p="lg">
          <Outlet />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
