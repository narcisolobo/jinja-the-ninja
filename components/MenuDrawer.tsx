import {
  Drawer,
  DrawerHeader,
  DrawerItems,
  Sidebar,
  SidebarItemGroup,
  SidebarItems,
  SidebarItem,
} from "flowbite-react";
import { HiBookOpen, HiClock, HiHome, HiPhoneOutgoing } from "react-icons/hi";

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

function MenuDrawer({ isOpen, onClose }: MenuDrawerProps) {
  return (
    <Drawer open={isOpen} onClose={onClose} className="z-50">
      <DrawerHeader title="MENU" titleIcon={() => <></>} />
      <DrawerItems>
        <Sidebar aria-label="Navigation menu">
          <SidebarItems>
            <SidebarItemGroup>
              <SidebarItem href="/" icon={HiHome}>
                Home
              </SidebarItem>
              <SidebarItem href="#emergency" icon={HiPhoneOutgoing}>
                Emergency Info
              </SidebarItem>
              <SidebarItem href="#schedule" icon={HiClock}>
                Daily Schedule
              </SidebarItem>
              <SidebarItem href="#care" icon={HiBookOpen}>
                Care Guide
              </SidebarItem>
            </SidebarItemGroup>
          </SidebarItems>
        </Sidebar>
      </DrawerItems>
    </Drawer>
  );
}

export default MenuDrawer;
