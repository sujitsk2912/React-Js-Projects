import { useContext, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { Context } from "../../../utils/context";

const CartItem = () => {
  const { cartItems, handleRemoveFromCart, handleCartProductQty, cartCount } =
    useContext(Context);
  const [value, setValue] = useState(1);

  return (
    <>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="whitespace-nowrap flex w-full justify-center items-center px-1 py-1 hover:bg-gray-200 transition ease-linear border-b mb-4 mt-2  cursor-pointer"
        >
          <div className="w-[30%]">
            <div className="bg-gray-200 w-fit">
              <img
                src={
                  import.meta.env.VITE_APP_DEV_URL +
                  item.attributes.img.data[0].attributes.url
                }
                alt="product"
                className="h-[70px] w-[70px]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 ml-2 w-[68%]">
            <div>
              <h1 className="font-medium whitespace-nowrap text-ellipsis overflow-hidden text-sm">
                {item.attributes.title}
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="inline-block h-fit bg-white border border-gray-300 w-fit"
                data-hs-input-number=""
              >
                <div className="flex items-center gap-2">
                  <div>
                    <button
                      type="button"
                      className="border-r size-7 inline-flex justify-center  items-center gap-x-1 text-sm font-medium   bg-white text-gray-800 shadow-smdisabled:opacity-50 disabled:pointer-events-none  hover:bg-neutral-800 hover:text-white"
                      onClick={() => {
                        handleCartProductQty("dec", item);
                      }}
                      disabled={value === 0}
                    >
                      <svg
                        className="flex-shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                      </svg>
                    </button>
                    <input
                      className="p-0 w-6 bg-transparent border-0 text-gray-800 text-sm font-medium text-center focus:ring-0 "
                      type="text"
                      value={item.attributes.quantity}
                      readOnly
                    />
                    <button
                      type="button"
                      className="border-l size-7 inline-flex justify-center  items-center gap-x-1 text-sm font-medium   bg-white text-gray-800 shadow-smdisabled:opacity-50 disabled:pointer-events-none  hover:bg-neutral-800 hover:text-white"
                      onClick={() => {
                        handleCartProductQty("inc", item);
                      }}
                    >
                      <svg
                        className="flex-shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => handleRemoveFromCart(item)}
                  className="inline-flex items-center tracking-wide rounded-md  px-1.5 py-1 text-xs   bg-red-500 text-white hover:bg-red-600"
                >
                  {/* <MdDeleteForever className="text-lg mr-1" /> */}
                  Remove
                </button>
              </div>
            </div>

            <div className="mt-0.5">
              <p className="flex flex-row gap-2 text-sm font-semibold  items-center">
                <span>{item.attributes.quantity}</span>x
                <span className="text-violet-800">
                  ₹{item.attributes.quantity * item.attributes.price}
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartItem;
