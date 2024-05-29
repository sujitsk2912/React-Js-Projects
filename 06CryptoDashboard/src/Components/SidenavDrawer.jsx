import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { HiMenuAlt1 } from "react-icons/hi";
import Sidenav from "./Sidenav";

const SidenavDrawer = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <div className="lg:hidden text-center">
        <HiMenuAlt1
          className="text-3xl cursor-pointer"
          onClick={toggleDrawer}
          aria-controls="drawer-navigation"
        />
      </div>

      <aside className="hidden lg:flex flex-col justify-between items-center min-h-[100vh] max-h-full min-w-[16rem] p-2 shadow-lg max-w-[16rem]">
        <Sidenav />
      </aside>

      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 h-screen overflow-y-auto transition-transform transform bg-white w-64 ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-labelledby="drawer-navigation-label"
      >
        <button
          type="button"
          onClick={toggleDrawer}
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <RxCross2 className="text-2xl" />
          <span className="sr-only">Close menu</span>
        </button>
        <div className="lg:hidden">
          <Sidenav />
        </div>
      </div>
    </div>
  );
};

export default SidenavDrawer;
