import { useContext, useEffect } from "react";
import HeroContainer from "../HeroSection/HeroContainer";
import ProductCard from "../../Components/Products/ProductCard/ProductCard";
import { fetchDataFromApi } from "../../utils/api";
import AppContext, { Context } from "../../utils/context";
import ProductCategory from "../Category/ProductCategory";

const HomePage = () => {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);
  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getCategories = async () => {
    try {
      const res = await fetchDataFromApi("/api/categories?populate=*");
      setCategories(res.data);
      // console.log(res.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  const getProducts = async () => {
    try {
      const res = await fetchDataFromApi("/api/products?populate=*");
      setProducts(res.data);
      // console.log(res);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <AppContext>
      <HeroContainer />
      {/* <Category categories={categories} /> */}
      <ProductCategory categories={categories} />
      <ProductCard products={products} />
    </AppContext>
  );
};

export default HomePage;
