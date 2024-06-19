import "./Success.scss";
import successSvg from "../../assets/success.svg";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="h-fit w-fit  py-14 px-6 rounded-lg ">
        <div className="text-center flex items-center justify-center flex-col gap-5">
          <img src={successSvg} alt="success" className="successSvg" />
          <h3 className="font-semibold text-xl text-gray-800">
            Order Confirmed !
          </h3>
        </div>
        <div className="text-center text-sm flex text-gray-500 flex-col gap-2  mt-3">
          <p>
            Your order has been placed successfully.
            <span className="font-semibold text-[#4CAE00]"> Order History</span>
          </p>
          <p>
            Get delivery by
            <span className="font-semibold"> Mon, 06 Feb - Thu, 09 Feb</span>
          </p>
          <a href="#" className="font-semibold text-[#4CAE00]">
            Track My Order
          </a>
        </div>
        <div className="flex justify-center items-center mt-8">
          <button
            onClick={() => navigate("/")}
            className="bg-[#4CAE00] flex gap-x-3 text-sm sm:text-base items-center justify-center text-white rounded-lg hover:bg-[#4CAE00]/80 duration-300 transition-colors border border-transparent px-8 py-2.5 font-medium"
          >
            <span>Continue Shopping</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
