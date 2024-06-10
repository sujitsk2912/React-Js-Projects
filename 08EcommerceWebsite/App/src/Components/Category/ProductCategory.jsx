import "./ProductCategory.scss";

const ProductCategory = () => {
  return (
    <section className="max-w-[1240px] m-auto pt-4 pb-4 px-4">
      <div className="mb-4">
        <h1 className="product-title">category</h1>
      </div>
      <div className="products-container">
        <div className="product-category  border shadow-md">
          <div className="outer-container h-[120px] w-[250px] bg-gray-200 rounded-sm outline-none border-none flex justify-center items-center  relative overflow-hidden">
            <img
              src="/src/assets/category/cat-1.jpg"
              className="absolute product-category-img object-cover "
            />
          </div>
        </div>
        <div className="product-category  border shadow-md">
          <div className="outer-container h-[120px] w-[250px] bg-gray-200 rounded-sm outline-none border-none flex justify-center items-center  relative overflow-hidden">
            <img
              src="/src/assets/category/cat-2.jpg"
              className="absolute product-category-img object-cover "
            />
          </div>
        </div>
        <div className="product-category  border shadow-md">
          <div className="outer-container h-[120px] w-[250px] bg-gray-200 rounded-sm outline-none border-none flex justify-center items-center  relative overflow-hidden">
            <img
              src="/src/assets/category/cat-3.jpg"
              className="absolute product-category-img object-cover "
            />
          </div>
        </div>
        <div className="product-category  border shadow-md">
          <div className="outer-container h-[120px] w-[250px] bg-gray-200 rounded-sm outline-none border-none flex justify-center items-center  relative overflow-hidden">
            <img
              src="/src/assets/category/cat-4.jpg"
              className="absolute product-category-img object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
