import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="max-w-[1280px] m-auto">
      <div className="footer-content mt-10 mb-10">
        <div className="col">
          <h2 className="font-semibold">About</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            nemo quam, eum sint hic dolorum nisi.
          </p>
        </div>
        <div className="col">
          <h2 className="font-semibold">Contact</h2>
          <span>
            <i>
              <FaLocationArrow />
            </i>
            Arena Itect Pvt. Ldt, Gokulpeth, Nagpur, 440001
          </span>
          <span>
            <i>
              <FaMobileAlt />
            </i>
            Phone: 9579120636
          </span>
          <span>
            <i>
              <MdMail />
            </i>
            Email: e_store@gmail.com
          </span>
        </div>
        <div className="col">
          <h2 className="font-semibold ">Categories</h2>
          <ul className="categories-content">
            <li>
              <a href="#">Headphones</a>
            </li>
            <li>
              <a href="#">Smart Watches</a>
            </li>
            <li>
              <a href="#">Blueooth Speakers</a>
            </li>
            <li>
              <a href="#">Wireless Earbuds</a>
            </li>
            <li>
              <a href="#">Home Theatre</a>
            </li>
            <li>
              <a href="#">Projectors</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h2 className="font-semibold">Pages</h2>
          <ul className="pages-content">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright-section">
        <p>
          Copyright @2024 E-Store. All Rights Resevred | Created By Sujit
          Khangar
        </p>
        <div>
          <img src="/src/assets/payments.png" alt="payments" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
