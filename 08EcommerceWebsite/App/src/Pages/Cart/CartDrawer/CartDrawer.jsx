import { Drawer, Typography, IconButton } from "@material-tailwind/react";
import { BsCartX } from "react-icons/bs";
import "./CartDrawer.scss";
import CartItem from "../CartItem/CartItem";
import { useContext, useState } from "react";
import { Context } from "../../../utils/context";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({ setShowCart }) => {
  const navigate = useNavigate();
  const { cartCount, cartSubTotal } = useContext(Context);
  return (
    <div className="drawer-panel">
      <div className="opacity-layer"></div>
      <Drawer
        placement="right"
        open={true}
        onClose={() => setShowCart(false)}
        className="p-4 drawer-content shadow-lg"
      >
        <div className="flex items-center justify-between mb-2">
          <Typography className="font-semibold uppercase  text-md">
            Shopping cart
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={() => {
              setShowCart(false);
            }}
            className="hover:bg-gray-200 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <hr className="border-gray-300" />
        {cartCount == 0 ? (
          <div className="empty-cart flex flex-col justify-center items-center gap-4 mt-20">
            <i>
              <BsCartX className="h-32 w-32 text-gray-400" />
            </i>
            <span className="text-gray-800 text-md">
              No products in the cart.
            </span>

            <button
              type="button"
              onClick={() => {
                navigate("/"), setShowCart(false);
              }}
              className="inline-flex items-center rounded-md bg-violet-700 px-3 py-2 text-sm font-medium text-white hover:bg-violet-800"
            >
              Return To Cart
            </button>
          </div>
        ) : (
          <div className="h-[93%] flex flex-col justify-between mt-1  ">
            <div className="cartItems overflow-x-auto scroll">
              <CartItem />
            </div>
            <footer className="w-full flex flex-col gap-3 mt-2">
              <hr className="border-gray-300" />
              <div className="flex justify-between px-1">
                <h3 className="font-semibold uppercase">Subtotal: </h3>
                <span className="font-semibold  text-violet-800">
                  ₹ {cartSubTotal}
                </span>
              </div>
              <hr className="border-gray-300" />
              <button
                type="button"
                className="inline-flex items-center tracking-wider justify-center rounded-md bg-violet-700 px-3 py-2 text-sm font-medium text-white hover:bg-violet-800 uppercase mt-1"
              >
                Checkout
              </button>
            </footer>
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default CartDrawer;
