import { Avatar, Group, Menu, Text, UnstyledButton } from "@mantine/core";
import {
  TbChevronDown as ChevronDownIcon,
  TbUsersGroup as GroupIcon,
  TbLogout2 as LogoutIcon,
  TbUserSquareRounded as ProfileIcon
} from "react-icons/tb";
import classes from "./ProfileMenu.module.css";

export function ProfileMenu() {
  return (
    <Menu position="bottom" shadow="md" width={225}>
      <Menu.Target>
        <UnstyledButton className={classes.button}>
          <Group justify="space-between">
            <Group gap={8}>
              <Avatar size="sm" />
              <Text fw={600}>Marissa</Text>
            </Group>
            <ChevronDownIcon />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          className={classes.menuItem}
          leftSection={<ProfileIcon size={18} />}
        >
          Profile
        </Menu.Item>
        <Menu.Item
          className={classes.menuItem}
          leftSection={<GroupIcon size={18} />}
        >
          Manage Users
        </Menu.Item>
        <Menu.Item
          className={classes.menuItem}
          leftSection={<LogoutIcon size={18} />}
        >
          Log Out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
