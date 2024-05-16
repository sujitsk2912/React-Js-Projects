import React from "react";

function Navbar() {
  return (
    <nav className=" flex items-center justify-center flex-row w-full">
      <div className=" flex items-center justify-between max-w-full w-11/12 p-4 flex-wrap">
        <div className="">
          <img
            className="brand-logo"
            src="/public/images/nike-logo.png"
            alt="brand-logo"
          />
        </div>
        <div>
          <ul className="flex gap-6 font-semibold uppercase">
            <li href="#" className="">
              menu
            </li>
            <li href="#" className="">
              location
            </li>
            <li href="#" className="">
              about
            </li>
            <li href="#" className="">
              contact
            </li>
          </ul>
        </div>
        <div>
          <button
            type="submit"
            className="rounded-sm text-white bg-red-600 hover:bg-red-700 px-5 py-1"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
