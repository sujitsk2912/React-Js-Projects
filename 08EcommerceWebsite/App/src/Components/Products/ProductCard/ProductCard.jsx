import { useNavigate } from "react-router-dom";
import "./ProductCard.scss";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";

const ProductCard = ({ products }) => {
  const navigate = useNavigate();
  const addToWishlist = () => toast.success("Product added to wishlist");

  return (
    <section className="max-w-[1240px] m-auto pt-4 pb-4 px-4">
      <div className="mb-4">
        <h1 className="product-title">popular products</h1>
      </div>
      <div className="products-container justify-start ">
        {products?.map((item) => (
          <div
            key={item.id}
            id={item.id}
            className="product-card w-[250px] h-auto border shadow-md"
          >
            <div
              className="h-[280px] w-[250px] bg-gray-200 rounded-sm outline-none border-none flex justify-center items-center p-3"
              onClick={() => navigate(`/product/${item.id}`)}
            >
              <img
                src={
                  import.meta.env.VITE_APP_DEV_URL +
                  item.attributes.img.data[0].attributes.url
                }
                className="product-img object-cover"
              />
            </div>
            <div className="text-start flex gap-1 flex-col p-2">
              <p className="whitespace-nowrap text-ellipsis overflow-hidden font-medium text-sm ">
                {item.attributes.title}
              </p>
              <p className="product-description whitespace-nowrap text-ellipsis overflow-hidden text-[13px] ">
                {item.attributes.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">
                  ₹{item.attributes.price}
                </span>
                <span
                  className="mr-2 flex items-center gap-1"
                  onClick={() => {}}
                >
                  <svg
                    className="wishlist"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="1080"
                    height="1080"
                    viewBox="0 0 1080 1080"
                    onClick={addToWishlist}
                  >
                    <desc>Created with Fabric.js 5.2.4</desc>
                    <defs></defs>
                    <g
                      transform="matrix(1 0 0 1 540 540)"
                      id="5f89cb85-e0ec-4ef6-9c1c-07131a2ea334"
                    >
                      <rect
                        className="rect"
                        x="-540"
                        y="-540"
                        rx="0"
                        ry="0"
                        width="1080"
                        height="1080"
                      />
                    </g>
                    <g
                      transform="matrix(1 0 0 1 540 540)"
                      id="16073fe0-147c-4c22-b03f-aa3fb011c6e6"
                    ></g>
                    <g transform="matrix(45 0 0 45 540 540)">
                      <path
                        className="path"
                        transform=" translate(-12, -12.18)"
                        d="M 12 21.35 L 10.55 20.03 C 5.4 15.36 2 12.28 2 8.5 C 2 5.42 4.42 3 7.5 3 C 9.24 3 10.91 3.81 12 5.09 C 13.09 3.81 14.76 3 16.5 3 C 19.58 3 22 5.42 22 8.5 C 22 12.28 18.6 15.36 13.45 20.04 L 12 21.35 z"
                      />
                    </g>
                  </svg>
                  {/* <p className="wishlist text-sm">Wishlist</p> */}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCard;
