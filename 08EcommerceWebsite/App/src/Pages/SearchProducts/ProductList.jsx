
const ProductList = () => {
  return (
    <div className=" flex p-2 m-auto border-b hover:bg-gray-100 transition ease-linear cursor-pointer mb-2 gap-1">
      <div className="img-card flex-shrink-0">
        <img
          src="/src/assets/products/watch-prod-2.webp"
          alt="products"
          className="h-[70px] w-[70px] bg-gray-100 "
        />
      </div>
      <div className="details-card flex flex-col gap-2  flex-grow p-2 whitespace-nowrap text-ellipsis overflow-hidden ">
        <h1 className="text-md max-sm:text-sm font-medium ">
          boAt Watch Iris 1.39 AMOLEDDisplay Smartwatch (Red Strap, Free Size)
        </h1>
        <p className="text-sm max-sm:text-xs text-gray-600 whitespace-nowrap text-ellipsis overflow-hidden">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi earum
          consectetur quidem voluptas repellendus ducimus odit cupiditate
          molestias consequatur suscipit, aut delectus commodi, hic, accusantium
          alias illum rem quod deleniti.
        </p>
      </div>
    </div>
  );
};

export default ProductList;
