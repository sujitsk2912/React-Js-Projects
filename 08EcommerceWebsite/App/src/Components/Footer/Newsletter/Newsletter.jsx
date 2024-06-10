import "./Newsletter.scss";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className="newsletter-section flex flex-col justify-center items-center gap-4 pl-2 pr-2 p-6 bg ">
      <div className="newsletter-content flex justify-center items-center flex-col gap-2">
        <h4
          className="text-md uppercase text-gray-500 font-medium"
          style={{ letterSpacing: "5px" }}
        >
          newsletter
        </h4>
        <h1 className="uppercase text-2xl font-semibold text-center max-sm:text-md">
          sign up for latest updates and offers
        </h1>
      </div>
      <div className="flex items-center justify-center flex-col gap-4 text-center ml-3 mr-3 ">
        <form>
          <div className="flex  flex-row overflow-hidden border-2 rounded-lg">
            <input
              className="px-4 py-2 min-w-[500px] max-sm:min-w-[10px] placeholder-gray-500 bg-white outline-none border-none max-sm:text-sm focus:placeholder-transparent "
              type="email"
              name="email"
              placeholder="Email Address"
            />

            <button className="px-4 py-3 text-sm max-sm:text-xs font-medium tracking-wider uppercase transition-colors duration-300  bg-violet-700 text-white  hover:bg-violet-800 ">
              subscribe
            </button>
          </div>
        </form>
        <p className="text-gray-500 max-sm:text-sm">
          Will be used in accordance with our Privacy Policy
        </p>
      </div>
      <div className="user-accounts flex gap-4 text-md max-sm:text-sm">
        <span>
          <FaLinkedinIn />
        </span>
        <span>
          <FaFacebookF />
        </span>
        <span>
          <FaTwitter />
        </span>
        <span>
          <FaInstagram />
        </span>
      </div>
    </div>
  );
};

export default Newsletter;
