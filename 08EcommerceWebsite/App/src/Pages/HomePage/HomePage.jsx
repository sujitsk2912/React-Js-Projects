import ProductCategory from "../../Components/Category/ProductCategory";
import Footer from "../../Components/Footer/Footer";
import Newsletter from "../../Components/Footer/Newsletter/Newsletter";
import Navbar from "../../Components/Header/Navbar";
import HeroContainer from "../../Components/HeroSection/HeroContainer";
import ProductCard from "../../Components/Products/ProductCard/ProductCard";
import CartDrawer from "../Cart/CartDrawer/CartDrawer";
import CartItem from "../Cart/CartItem/CartItem";
import ProductDetails from "../ProductDetails/ProductDetails";
import RelatedProducts from "../ProductDetails/RelatedProducts/RelatedProducts";
import SearchProducts from "../SearchProducts/SearchProducts";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroContainer />
      <ProductCategory />
      <ProductCard />
      {/* <ProductDetails /> */}
      {/* <RelatedProducts /> */}
      {/* <CartDrawer /> */}
      <Newsletter />
      {/* <CartItem />  */}
      {/* <SearchProducts /> */}
      <Footer />
    </>
  );
};

export default HomePage;
