import { RxDashboard } from "react-icons/rx";
import { TbArrowsDoubleSwNe } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../index.css";

const Sidenav = () => {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: TbArrowsDoubleSwNe,
      text: "Transactions",
      link: "/transactions",
    },
  ];
  return (
    <aside className="flex flex-col justify-between items-center min-h-[100vh] max-h-full min-w-[16rem] p-2 shadow-lg max-w-[16rem]">
      <div className="w-full h-full flex items-center flex-col">
        <h3 className="text-lg font-semibold mt-10 mb-4 text-violet-700 uppercase">
          Crypto Dashboard
        </h3>
        {navLinks.map((nav) => (
          <Link to={nav.link} key={nav.text} className="w-full">
            <div className="w-full flex items-center rounded-md shadow-sm justify-start gap-4 hover:bg-[#F3F3F7] mb-3 px-4 py-3 font-[500] text-gray-500 transition-all hover:text-black hover:cursor-pointer">
              <span>{<nav.icon />}</span>
              <h4 className="text-[15px]">{nav.text}</h4>
            </div>
          </Link>
        ))}
      </div>
      <Link to="/support" className="w-full">
        <div className="w-full flex items-center rounded-md shadow-sm justify-start gap-4 hover:bg-[#F3F3F7] mb-3 px-4 py-3 font-[500] text-gray-500 transition-all hover:text-black hover:cursor-pointer">
          <BiSupport />

          <h4 className="text-[15px]">Support</h4>
        </div>
      </Link>
    </aside>
  );
};

export default Sidenav;
