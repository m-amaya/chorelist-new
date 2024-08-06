import { Button, Stack } from "@mantine/core";
import { Navlink } from "@src/components/layout/Navlink";
import { ProfileMenu } from "@src/components/layout/ProfileMenu";
import {
  TbChecklist as ListIcon,
  TbPlus as PlusIcon,
  TbCalendarFilled as TodayIcon,
  TbCalendarMonth as UpcomingIcon
} from "react-icons/tb";

export function Navbar() {
  return (
    <Stack>
      <ProfileMenu />
      <Stack gap={10}>
        <Button leftSection={<PlusIcon />} variant="light">
          Add Chore
        </Button>
        <Stack gap={4}>
          <Navlink Icon={TodayIcon} to="/today">
            Today
          </Navlink>
          <Navlink Icon={UpcomingIcon} to="/upcoming">
            Upcoming
          </Navlink>
          <Navlink Icon={ListIcon} to="/list">
            View All
          </Navlink>
        </Stack>
      </Stack>
    </Stack>
  );
}
