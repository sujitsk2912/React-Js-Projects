import { useState } from "react";
import "./ProductDetails.scss";
import {
  FaCartPlus,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const ProductDetails = () => {
  const [value, setValue] = useState(1);

  const handleDecrement = () => {
    setValue((prevValue) => Math.max(1, prevValue - 1));
  };

  const handleIncrement = () => {
    setValue((prevValue) => prevValue + 1);
  };

  return (
    <div className="w-full xl:p-14">
      <section>
        <div className="product-details  max-w-[1040px] m-auto grid grid-cols-2 max-lg:grid-cols-1">
          <div className="product-image flex justify-center items-center bg-gray-100 h-[30rem] w-[30rem]">
            <img src="/src/assets/products/watch-prod-2.webp" alt="" />
          </div>
          <div className="product-data flex flex-col gap-4 text-start">
            <h1 className="font-semibold text-lg">
              boAt Watch Iris 1.39 AMOLED Display Smartwatch (Red Strap, Free
              Size)
            </h1>
            <p className="price text-xl font-semibold">₹ 3,999</p>
            <p className="prduct-description text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              fuga quis deleniti omnis molestiae, consequuntur tempore
              accusantium facilis, voluptatem impedit veritatis! Debitis
              eligendi, dignissimos amet sed esse perspiciatis cumque ullam
              tempora molestias inventore quos sequi aliquid placeat nobis.
              Exercitationem ab, iure repudiandae tempore non ipsum quam, illum
              ipsam et deleniti assumenda quaerat quas ullam, consequatur vitae
              placeat? Vitae adipisci consectetur tenetur id, dolorum nulla
              distinctio ab eaque dolores dolor reiciendis labore voluptatem
              laborum! Sapiente architecto perspiciatis asperiores
            </p>
            <div className="flex items-center gap-4 mt-4">
              <div
                className="inline-block h-fit bg-white border border-gray-300 w-fit"
                data-hs-input-number=""
              >
                <div className="flex items-center gap-x-2">
                  <button
                    type="button"
                    className="border-r size-8 inline-flex justify-center  items-center gap-x-2 text-sm font-medium   bg-white text-gray-800 shadow-smdisabled:opacity-50 disabled:pointer-events-none  hover:bg-neutral-800 hover:text-white"
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
                    className="p-0 w-6 bg-transparent border-0 text-gray-800 text-md font-medium text-center focus:ring-0 "
                    type="text"
                    value={value}
                    readOnly
                  />
                  <button
                    type="button"
                    className="border-l size-8 inline-flex justify-center  items-center gap-x-2 text-sm font-medium   bg-white text-gray-800 shadow-smdisabled:opacity-50 disabled:pointer-events-none  hover:bg-neutral-800 hover:text-white"
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
              <button
                type="button"
                className="inline-flex items-center tracking-wider rounded-md bg-violet-700 px-3 py-2 text-sm font-semibold uppercase text-white hover:bg-violet-800"
              >
                <FaCartPlus className="text-lg mr-2" />
                Add To Cart
              </button>
            </div>
            <hr />
            <p>
              <b className="text-sm font-semibold">Category: </b>
              <span className="text-sm text-gray-600">Smart Watches</span>
            </p>
            <p className="flex gap-3 items-center">
              <b className="text-sm font-semibold">Share:</b>
              <span className="share-icons">
                <i>
                  <FaFacebookF />
                </i>
                <i>
                  <FaTwitter />
                </i>
                <i>
                  <FaInstagram />
                </i>
                <i>
                  <FaLinkedinIn />
                </i>
                <i>
                  <FaPinterestP />
                </i>
              </span>
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="related-producs"></div>
      </section>
    </div>
  );
};

export default ProductDetails;
