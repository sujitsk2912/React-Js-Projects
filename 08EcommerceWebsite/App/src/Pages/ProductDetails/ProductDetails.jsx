import { useContext, useState } from "react";
import "./ProductDetails.scss";
import {
  FaCartPlus,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { Context } from "../../utils/context";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

  const addToCart = () => toast.success("Product added to cart");
  const addToWishlist = () => toast.success("Product added to wishlist");

  const { handleAddToCart } = useContext(Context);
  const [value, setValue] = useState(1);

  const handleDecrement = () => {
    setValue((prevValue) => Math.max(1, prevValue - 1));
  };

  const handleIncrement = () => {
    setValue((prevValue) => prevValue + 1);
  };

  if (!data) return null;

  return (
    <>
      <div className="w-full xl:p-14">
        {data?.data?.map((items) => (
          <div
            key={items.id}
            className="product-details max-w-[1040px] m-auto grid grid-cols-2 max-lg:grid-cols-1"
          >
            <div className="product-image flex m-auto justify-center items-center bg-gray-100 h-[30rem] w-[30rem]">
              <img
                src={
                  import.meta.env.VITE_APP_DEV_URL +
                  items.attributes.img.data[0].attributes.url
                }
                alt=""
              />
            </div>
            <div className="product-data flex flex-col gap-4 text-start">
              <h1 className="font-semibold text-lg">
                {items.attributes.title}
              </h1>
              <p className="price text-xl font-semibold">
                ₹ {items.attributes.price}
              </p>
              <p className="product-description text-sm text-gray-600">
                {items.attributes.description}
              </p>
              <div className="flex flex-col justify-center items-start max-sm:flex-col max-sm:items-start gap-4 mt-4">
                <div className="flex items-start gap-5 max-sm:flex-col ">
                  <div
                    className="inline-block h-fit bg-white border border-gray-300 w-fit"
                    data-hs-input-number=""
                  >
                    <div className="flex items-center gap-x-2 ">
                      <button
                        type="button"
                        className="border-r size-8 inline-flex justify-center items-center gap-x-2 text-sm font-medium bg-white text-gray-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none hover:bg-neutral-800 hover:text-white"
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
                        className="p-0 w-6 bg-transparent border-0 text-gray-800 text-md font-medium text-center focus:ring-0"
                        type="text"
                        value={value}
                        readOnly
                      />
                      <button
                        type="button"
                        className="border-l size-8 inline-flex justify-center items-center gap-x-2 text-sm font-medium bg-white text-gray-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none hover:bg-neutral-800 hover:text-white"
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
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        handleAddToCart(data?.data[0], value);
                        console.log(data?.data[0]);
                        setValue(1);
                        addToCart();
                      }}
                      className="btn inline-flex items-center tracking-wider   bg-black  text-sm font-semibold  text-white "
                    >
                      {/* <FaCartPlus className="text-lg mr-2" /> */}
                      Add To cart
                    </button>
                    {/* <button
                      type="button"
                      onClick={() => {
                        // handleAddToCart(data?.data[0], value);
                        // console.log(data?.data[0]);
                        // setValue(1);
                        // addToCart();
                      }}
                      className="btn inline-flex items-center tracking-wider bg-white text-sm font-semibold  text-black outline-none border-2 border-black "
                    >
                      Buy Now
                    </button> */}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    // handleAddToWishlist(data?.data[0], value);
                    addToWishlist();
                  }}
                  className="inline-flex items-center tracking-wider rounded-md bg-transparent px-3 py-2 text-sm font-medium  text-black justify-center gap-1 "
                >
                  Add to favorite
                  <CiHeart className="text-xl mr-2" />
                </button>
              </div>
              <hr />
              <p>
                <b className="text-sm font-semibold">Category: </b>
                <span className="text-sm text-gray-600">
                  {items.attributes.categories.data[0].attributes.title}
                </span>
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
        ))}
      </div>
      <RelatedProducts
        productId={id}
        categoryId={data.data[0].attributes.categories.data[0].id}
      />
    </>
  );
};

export default ProductDetails;
