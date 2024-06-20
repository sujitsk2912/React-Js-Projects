import { useNavigate } from "react-router-dom";
import "./ProductCard.scss";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import { CiHeart } from "react-icons/ci";

const ProductCard = ({ products }) => {
  const navigate = useNavigate();
  // const addToWishlist = () => toast.success("Product added to wishlist");

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
            className="product-card w-[250px] h-auto shadow-lg border border-gray-100"
          >
            <div
              className="card"
              onClick={() => navigate(`/product/${item.id}`)}
            >
              <img
                src={
                  import.meta.env.VITE_APP_DEV_URL +
                  item.attributes.img.data[0].attributes.url
                }
                className="object-cover"
              />
            </div>
            <div className="text-start flex gap-1 flex-col p-2">
              <p className="whitespace-nowrap text-ellipsis overflow-hidden font-semibold text-md ">
                {item.attributes.title}
              </p>
              <p className="product-description whitespace-nowrap text-ellipsis overflow-hidden text-[14px] ">
                {item.attributes.description}
              </p>
              <hr className="mt-2 " />
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">
                  ₹{item.attributes.price}
                </span>
                <span>
                  <button
                    type="button"
                    onClick={() => {
                      // handleAddToWishlist(data?.data[0], value);
                      // addToWishlist();
                    }}
                    className="inline-flex items-center tracking-wider rounded-md bg-transparent px-3 py-2 text-sm font-medium  text-black justify-center gap-1 "
                  >
                    <CiHeart className="text-2xl " />
                  </button>
                </span>
              </div>
              {/* <button
                type="button"
                onClick={() => {
                  // handleAddToCart(data?.data[0], value);
                  // console.log(data?.data[0]);
                  // setValue(1);
                  // addToCart();
                }}
                className="inline-flex items-center tracking-wider  bg-z p-2 text-sm font-medium  text-white rounded-md uppercase justify-center mt-1"
              >
                Add To cart
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCard;
