import { Menu, X, ChevronDown, ChevronRight, Link } from "lucide-react";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { RiShoppingCartLine } from "react-icons/ri";
import "./Navbar.scss";

import React, { useEffect, useState } from "react";
import CartDrawer from "../../Pages/Cart/CartDrawer/CartDrawer";
import SearchProducts from "../../Pages/SearchProducts/SearchProducts";

const Navbar = () => {
  const menuItems = [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "About",
      href: "#",
    },
    {
      name: "Categories",
      href: "#",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  // console.log(showCart);

  return (
    <>
      <header
        className={`relative items-center w-full h-[60px] text-white bg-[#202020] ${
          scrolled ? "sticky-header" : ""
        } 
      }`}
      >
        <nav className="h-full m-auto flex max-w-6xl  items-center justify-between pl-12 pr-12 max-sm:pl-10 max-sm:pr-6">
          <div className="hidden lg:block">
            <ul className=" inline-flex space-x-8 ">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="inline-flex items-center text-sm text-white font-medium uppercase nav-links"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="inline-flex text-2xl items-center space-x-2 uppercase">
            <span className="font-semibold">E-store</span>
          </div>
          <div className=" inline-flex justify-center items-center gap-4 text-2xl ">
            <span onClick={() => setShowSearch(true)}>
              <IoSearch className="cursor-pointer" />
            </span>
            <span>
              <FaRegHeart className="cursor-pointer" />
            </span>
            <span
              className="relative flex items-center justify-center"
              onClick={() => setShowCart(true)}
            >
              <RiShoppingCartLine className="cursor-pointer" />
              <span className="absolute text-center -top-2 left-3 text-xs rounded-[15px] p-[2.5px] min-w-[20px] bg-violet-600">
                5
              </span>
            </span>
          </div>
        </nav>
        <div className="absolute top-[1.1rem] ml-2 lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-[#202020] shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex text-2xl items-center space-x-2 uppercase">
                    <span className="font-semibold">E-store</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4 ">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-slate-700 "
                      >
                        <span className="ml-3 text-base font-medium text-white ">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
      {showCart && <CartDrawer setShowCart={setShowCart} />}
      {showSearch && <SearchProducts setShowSearch={setShowSearch} />}
    </>
  );
};

export default Navbar;
