import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { PiUserCircleThin } from "react-icons/pi";
import SidenavDrawer from "./SidenavDrawer";
import { Link } from "react-router-dom";

const Topnav = ({ title }) => {
  const userLinks = [
    {
      text: "Log out",
      link: "/signin",
    },
    {
      text: "Support",
      link: "/support",
    },
  ];
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
            {userLinks.map((user) => (
              <Link to={user.link} key={user.text}>
                <MenuItem>{user.text}</MenuItem>
              </Link>
            ))}
          </MenuList>
        </Menu>
      </div>
    </nav>
  );
};

export default Topnav;
