import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./Category.scss";
import { toast } from "react-toastify";

const Category = () => {
  const navigate = useNavigate();
  const addToWishlist = () => toast.success("Product added to wishlist");

  const { id } = useParams();
  const { data } = useFetch(
    `/api/products?populate=*&[filters][categories][id]=${id}`
  );

  if (!data) return;

  return (
    <section className="max-w-[1240px] m-auto pt-4 pb-4 px-4">
      <div className="mb-4">
        <h1 className="product-title">category</h1>
      </div>
      <div className="products-container justify-start ">
        {data?.data?.map((item) => (
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
              <hr className="mt-2 mb-2" />
              <div className="flex items-center justify-between my-1">
                <span className="text-lg font-semibold">
                  ₹{item.attributes.price}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    // handleAddToCart(data?.data[0], value);
                    // console.log(data?.data[0]);
                    // setValue(1);
                    // addToCart();
                  }}
                  className="inline-flex items-center tracking-wider  bg-black px-4 py-2 text-sm font-medium  text-white rounded-md "
                >
                  {/* <FaCartPlus className="text-lg mr-2" /> */}
                  Add To cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
