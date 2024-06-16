import { useNavigate } from "react-router-dom";
import "./ProductList.scss";

const ProductList = ({ data, setShowSearch }) => {
  const navigate = useNavigate();

  return (
    <div className="product-container">
      {data?.map((product) => (
        <div
          key={product.id}
          onClick={() => {
            setShowSearch(false), navigate(`/product/${product.id}`);
          }}
          className="product-div flex p-2 m-auto border-b hover:bg-gray-100 transition ease-linear cursor-pointer mb-2 gap-1 overflow-auto"
        >
          <div className="img-card flex-shrink-0">
            <img
              src={
                import.meta.env.VITE_APP_DEV_URL +
                product.attributes.img.data[0].attributes.url
              }
              alt="products"
              className="h-[70px] w-[70px] bg-gray-100 "
            />
          </div>
          <div className="details-card flex flex-col gap-2  flex-grow p-2 whitespace-nowrap text-ellipsis overflow-hidden ">
            <h1 className="text-md max-sm:text-sm font-medium ">
              {product.attributes.title}
            </h1>
            <p className="text-sm max-sm:text-xs text-gray-600 whitespace-nowrap text-ellipsis overflow-hidden">
              {product.attributes.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
