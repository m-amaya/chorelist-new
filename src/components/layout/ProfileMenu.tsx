import { Avatar, Group, Menu, Text, UnstyledButton } from "@mantine/core";
import { useUserStore } from "@src/stores/user.store";
import {
  TbChevronDown as ChevronDownIcon,
  TbUsersGroup as GroupIcon,
  TbLogout2 as LogoutIcon,
  TbUserSquareRounded as ProfileIcon
} from "react-icons/tb";
import { NavLink } from "react-router-dom";
import classes from "./ProfileMenu.module.css";

export function ProfileMenu() {
  const { displayName, logout, photoUrl } = useUserStore();

  return (
    <Menu position="bottom" shadow="md" width={225}>
      <Menu.Target>
        <UnstyledButton className={classes.button}>
          <Group justify="space-between">
            <Group gap={8}>
              <Avatar size="sm" src={photoUrl} />
              <Text fw={600}>{displayName}</Text>
            </Group>
            <ChevronDownIcon />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          className={classes.menuItem}
          component={NavLink}
          leftSection={<ProfileIcon size={18} />}
          to="/profile"
        >
          Profile
        </Menu.Item>
        <Menu.Item
          className={classes.menuItem}
          component={NavLink}
          leftSection={<GroupIcon size={18} />}
          to="/users"
        >
          Manage Users
        </Menu.Item>
        <Menu.Item
          className={classes.menuItem}
          leftSection={<LogoutIcon size={18} />}
          onClick={() => logout()}
        >
          Log Out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
