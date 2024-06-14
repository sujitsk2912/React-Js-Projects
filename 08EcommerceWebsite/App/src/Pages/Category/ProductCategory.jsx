import "./ProductCategory.scss";
import { useNavigate } from "react-router-dom";

const ProductCategory = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <section className="max-w-[1240px] m-auto pt-4 pb-4 px-4">
      <div className="mb-4">
        <h1 className="product-title">category</h1>
      </div>
      <div className="products-container">
        {categories?.map((item) => (
          <div
            key={item.id}
            className="product-category  border shadow-md"
            onClick={() => navigate(`/category/${item.id}`)}
          >
            <div className="outer-container h-[120px] w-[250px] bg-gray-200 rounded-sm outline-none border-none flex justify-center items-center  relative overflow-hidden">
              <div className="product-category border shadow-md">
                <div className="outer-container h-[120px] w-[250px] bg-gray-200 rounded-sm outline-none border-none flex justify-center items-center relative overflow-hidden">
                  <img
                    src={
                      import.meta.env.VITE_APP_DEV_URL +
                      item.attributes.img.data.attributes.url
                    } // Assuming each category has an image_url property
                    alt={item.title} // Assuming each category has a title property
                    className="absolute product-category-img object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategory;
