import { ActionIcon, Tooltip } from "@mantine/core";
import {
  TbLayoutSidebarRightExpand as SidebarCollapseIcon,
  TbLayoutSidebarLeftExpand as SidebarExpandIcon
} from "react-icons/tb";

type ToggleSidebarActionProps = {
  opened: boolean;
  toggle: () => void;
};

export function ToggleSidebarAction({
  opened,
  toggle
}: ToggleSidebarActionProps) {
  return (
    <Tooltip label={`${opened ? "Close" : "Open"} Sidebar`}>
      <ActionIcon onClick={() => toggle()} size="lg" variant="subtle">
        {opened ? (
          <SidebarCollapseIcon size={22} />
        ) : (
          <SidebarExpandIcon size={22} />
        )}
      </ActionIcon>
    </Tooltip>
  );
}
