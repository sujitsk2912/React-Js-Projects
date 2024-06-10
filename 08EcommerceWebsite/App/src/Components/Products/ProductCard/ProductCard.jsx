import "./ProductCard.scss";

const ProductCard = () => {
  return (
   <section className="max-w-[1240px] m-auto pt-4 pb-4 px-4">
      <div className="mb-4">
        <h1 className="product-title">popular products</h1>
      </div>
      <div className="products-container">
        <div className="product-card w-[250px] h-auto border shadow-md">
          <div className="h-[280px] w-[250px] bg-gray-200 rounded-sm outline-none border-none flex justify-center items-center p-3">
            <img
              src="/src/assets/products/watch-prod-1.webp"
              className="product-img object-cover"
            />
          </div>
          <div className="text-start flex gap-1 flex-col p-2">
            <p className="product-description whitespace-nowrap text-ellipsis overflow-hidden text-sm ">
              Lorem ipsum dolor sit amet.
            </p>
            <span className="text-lg font-semibold">₹1799</span>
          </div>
        </div>
        <div className="product-card w-[250px] h-auto border shadow-md">
          <div className="h-[280px] w-[250px] bg-gray-200 rounded-sm outline-none border-none flex justify-center items-center p-3">
            <img
              src="/src/assets/products/watch-prod-1.webp"
              className="product-img object-cover"
            />
          </div>
          <div className="text-start flex gap-1 flex-col p-2">
            <p className="product-description whitespace-nowrap text-ellipsis overflow-hidden text-sm ">
              Lorem ipsum dolor sit amet.
            </p>
            <span className="text-lg font-semibold">₹1799</span>
          </div>
        </div>
        <div className="product-card w-[250px] h-auto border shadow-md">
          <div className="h-[280px] w-[250px] bg-gray-200 rounded-sm outline-none border-none flex justify-center items-center p-3">
            <img
              src="/src/assets/products/watch-prod-1.webp"
              className="product-img object-cover"
            />
          </div>
          <div className="text-start flex gap-1 flex-col p-2">
            <p className="product-description whitespace-nowrap text-ellipsis overflow-hidden text-sm ">
              Lorem ipsum dolor sit amet.
            </p>
            <span className="text-lg font-semibold">₹1799</span>
          </div>
        </div>
        <div className="product-card w-[250px] h-auto border shadow-md">
          <div className="h-[280px] w-[250px] bg-gray-200 rounded-sm outline-none border-none flex justify-center items-center p-3">
            <img
              src="/src/assets/products/watch-prod-1.webp"
              className="product-img object-cover"
            />
          </div>
          <div className="text-start flex gap-1 flex-col p-2">
            <p className="product-description whitespace-nowrap text-ellipsis overflow-hidden text-sm ">
              Lorem ipsum dolor sit amet.
            </p>
            <span className="text-lg font-semibold">₹1799</span>
          </div>
        </div>
        <div className="product-card w-[250px] h-auto border shadow-md">
          <div className="h-[280px] w-[250px] bg-gray-200 rounded-sm outline-none border-none flex justify-center items-center p-3">
            <img
              src="/src/assets/products/watch-prod-1.webp"
              className="product-img object-cover"
            />
          </div>
          <div className="text-start flex gap-1 flex-col p-2">
            <p className="product-description whitespace-nowrap text-ellipsis overflow-hidden text-sm ">
              Lorem ipsum dolor sit amet.
            </p>
            <span className="text-lg font-semibold">₹1799</span>
          </div>
        </div>
      </div>
    </section> 
  );
};

export default ProductCard;
