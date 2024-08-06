import { Group, Text, UnstyledButton } from "@mantine/core";
import { ReactNode } from "react";
import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";
import classes from "./Navlink.module.css";

type NavlinkProps = {
  Icon?: IconType;
  children: ReactNode;
  to: string;
};

export function Navlink({ children, Icon, to }: NavlinkProps) {
  return (
    <UnstyledButton className={classes.navlink} component={NavLink} to={to}>
      <Group justify="space-between">
        <Group gap={8}>
          {Icon && <Icon aria-label="icon" size={18} />}
          <Text aria-label="text">{children}</Text>
        </Group>
        <Text aria-label="count" c="dimmed" size="sm">
          10
        </Text>
      </Group>
    </UnstyledButton>
  );
}
