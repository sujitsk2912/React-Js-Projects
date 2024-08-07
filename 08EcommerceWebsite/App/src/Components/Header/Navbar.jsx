import { Menu, X } from "lucide-react";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { RiShoppingCartLine } from "react-icons/ri";
import "./Navbar.scss";

import { useContext, useEffect, useState } from "react";
import CartDrawer from "../../Pages/Cart/CartDrawer/CartDrawer";
import SearchProducts from "../../Pages/SearchProducts/SearchProducts";
import { Context } from "../../utils/context";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
// import { useAuth0 } from "@auth0/auth0-react";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const { cartCount } = useContext(Context);

  // const { wishlistCount } = useContext(Context);
  // const { loginWithRedirect } = useAuth0();
  const menuItems = [
    {
      name: "Home",
      navigate: "/",
    },
    {
      name: "About",
      navigate: "#",
    },
    {
      name: "Categories",
      navigate: "#",
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
                  <p
                    onClick={() => {
                      navigate(`${item.navigate}`);
                    }}
                    className="inline-flex items-center text-sm text-white font-medium uppercase nav-links cursor-pointer"
                  >
                    {item.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="inline-flex text-2xl items-center space-x-2 uppercase">
            <span
              className="font-semibold cursor-pointer"
              onClick={() => navigate("/")}
            >
              E-store
            </span>
          </div>
          <div className=" inline-flex justify-center items-center gap-4 text-2xl ">
            <span
              href="/searchproducts"
              onClick={() => {
                setShowSearch(true);
              }}
            >
              <IoSearch className="cursor-pointer" />
            </span>
            <span className="relative flex items-center justify-center">
              <FaRegHeart className="cursor-pointer" />
              {/* {!!wishlistCount && (
                <span className="absolute text-center -top-2 left-3 text-xs rounded-[15px] p-[2.5px] min-w-[20px] bg-violet-600">
                  {wishlistCount}
                </span>
              )} */}
            </span>
            <span
              className="relative flex items-center justify-center"
              onClick={() => setShowCart(true)}
            >
              <RiShoppingCartLine className="cursor-pointer" />
              {!!cartCount && (
                <span className="absolute text-center -top-2 left-3 text-xs rounded-[15px] p-[2.5px] min-w-[20px] bg-violet-600">
                  {cartCount}
                </span>
              )}
            </span>
          </div>
          <div className="relative dropdown max-sm:hidden flex items-center gap-1.5">
            <p className="dropdownMenuLink">
              Welcome, <span>{user}</span>
            </p>
            <div className="dropdown show flex mt-1 ">
              <a
                className="dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></a>

              <div
                className="dropdown-menu dropdown-menu-right bg-[#202020] border-0 p-2"
                aria-labelledby="dropdownMenuLink"
              >
                <div>
                  <div className="dropdown">
                    <button className="dropbtn">
                      <IoIosArrowDown />
                    </button>
                    <div className="dropdown-content absolute text-center ">
                      <a
                        href=""
                  
                        onClick={() => {
                          logout({ returnTo: window.location.origin });
                          window.localStorage.clear();
                          // window.localStorage.href = "/signin";
                          navigate("/signin");
                          logout;
                        }}
                      >
                        Logout
                      </a>
                    </div>
                  </div>
                </div>
                {/* <button
                  type="button"
                  onClick={() => {
                   
                  }}
                  className="logout-btn hidden lg:block rounded-md shadow-sm"
                >
                  Logout
                </button> */}
              </div>
            </div>
          </div>
        </nav>
        <div className="absolute top-[1.1rem] ml-2 lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform  transition lg:hidden w-full">
            <div className="divide-y-2 divide-gray-50  bg-[#202020] shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex text-2xl items-center space-x-2 uppercase">
                    <span className="font-semibold">E-store</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="hr"></div>
                <div className="mt-4">
                  <nav className="grid gap-y-4 ">
                    <p>
                      Welcome, <span>{user}</span>
                    </p>
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold  "
                      >
                        <span className="ml-3 text-base font-medium text-white ">
                          {item.name}
                        </span>
                      </a>
                    ))}

                    <button
                      type="button"
                      onClick={() => {
                        logout({ returnTo: window.location.origin });
                        window.localStorage.clear();
                        // window.localStorage.href = "/signin";
                        navigate("/signin");
                        logout;
                      }}
                      className="logout-btn  rounded-md shadow-sm"
                    >
                      Logout
                    </button>
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
