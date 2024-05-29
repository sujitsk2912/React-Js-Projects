import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { PiUserCircleThin } from "react-icons/pi";
import SidenavDrawer from "./SidenavDrawer";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Topnav = ({ title }) => {
  const { logout } = useAuth();
  // const userLinks = [
  //   {
  //     text: "Log out",
  //     link: "/signin",
  //     auth: "logout",
  //   },
  //   {
  //     text: "Support",
  //     link: "/support",
  //     auth: "",
  //   },
  // ];
  return (
    <nav className="bg-white h-14 flex w-full ">
      <div className="flex min-w-[95%] justify-between items-center m-auto">
        <div className="lg:hidden">
          <SidenavDrawer />
        </div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <Menu>
          <MenuButton>
            <PiUserCircleThin className="text-5xl" />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={logout}>Logout</MenuItem>
            {/* <MenuItem>Support</MenuItem> */}
          </MenuList>
        </Menu>
      </div>
    </nav>
  );
};

export default Topnav;
