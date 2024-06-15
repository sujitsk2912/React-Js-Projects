import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./Category.scss";

const Category = () => {
  const navigate = useNavigate();

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
      <div className="products-container ">
        {data?.data?.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)}
            className="product-card w-[250px] h-auto border shadow-md"
          >
            <div className="h-[280px] w-[250px] bg-gray-200 rounded-sm outline-none border-none flex justify-center items-center p-3">
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
              <span className="text-lg font-semibold">
                ₹{item.attributes.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
