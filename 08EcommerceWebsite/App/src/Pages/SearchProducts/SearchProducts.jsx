import { IoClose } from "react-icons/io5";
import { LuSearchX } from "react-icons/lu";
import "./SearchProducts.scss";
import ProductList from "./ProductList";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";

const SearchProducts = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");

  const onchange = (e) => {
    setQuery(e.target.value);
  };

  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );

  if (!query.length) {
    data = null;
  } else {
    data = data?.data;
    console.log(data);
  }

  return (
    <div className="search-modal">
      <div className="flex flex-row w-[90%] m-auto justify-center items-center border-b-2 p-2">
        <input
          type="search"
          autoFocus
          onChange={onchange}
          placeholder="SEARCH FOR PRODUCTS"
          className="text-black text-3xl border-none outline-none font-semibold w-full text-center max-sm:h-10  max-sm:text-sm h-16 focus:ring-0  max-md:text-md max-md:h-14 uppercase px-4"
        />
        <IoClose
          onClick={() => {
            setShowSearch(false);
          }}
          className="text-4xl max-sm:text-2xl max-md:text-3xl cursor-pointer"
        />
      </div>

      <div className="w-3/5 max-sm:w-[95%] max-md:w-[90%] max-lg:w-[80%] m-auto mt-4  ">
        {!query.length ? (
          <div className="text-gray-500 text-center text-sm">
            Start typing to see products you are looking for.
          </div>
        ) : data && data.length > 0 ? (
          <div>
            <ProductList data={data} setShowSearch={setShowSearch} />
          </div>
        ) : (
          <div className="text-gray-500 text-center text-lg flex justify-center flex-col items-center mt-[10%] gap-3 font-medium">
            <i>
              <LuSearchX className="text-7xl text-gray-500" />
            </i>
            Product not found !
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchProducts;
