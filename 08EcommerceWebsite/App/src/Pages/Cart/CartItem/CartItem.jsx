import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

const CartItem = () => {
  const [value, setValue] = useState(1);

  const handleDecrement = () => {
    setValue((prevValue) => Math.max(1, prevValue - 1));
  };

  const handleIncrement = () => {
    setValue((prevValue) => prevValue + 1);
  };
  return (
    <>
      <div className="whitespace-nowrap flex w-full justify-center items-center px-1 py-1 hover:bg-gray-200 transition ease-linear border-b mb-1 mt-2  cursor-pointer">
        <div className="w-[30%]">
          <div className="bg-gray-200 w-fit">
            <img
              src="/src/assets/products/watch-prod-2.webp"
              alt="product"
              className="h-[70px] w-[70px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 ml-2 w-[68%]">
          <div>
            <h1 className="font-medium whitespace-nowrap text-ellipsis overflow-hidden text-sm">
              boAt Watch Iris 1.39 AMOLED Display Smartwatch (Red Strap, Free
              Size)
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
                    onClick={handleDecrement}
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
                    value={value}
                    readOnly
                  />
                  <button
                    type="button"
                    className="border-l size-7 inline-flex justify-center  items-center gap-x-1 text-sm font-medium   bg-white text-gray-800 shadow-smdisabled:opacity-50 disabled:pointer-events-none  hover:bg-neutral-800 hover:text-white"
                    onClick={handleIncrement}
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
                className="inline-flex items-center tracking-wide rounded-md  px-1.5 py-1 text-xs font-semibold  bg-red-500 text-white hover:bg-red-600"
              >
                {/* <MdDeleteForever className="text-lg mr-1" /> */}
                Remove
              </button>
            </div>
          </div>

          <div>
            <p className="flex flex-row gap-2 text-sm font-semibold  items-center">
              <span>{value}</span>x
              <span className="text-violet-800">₹{999}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
