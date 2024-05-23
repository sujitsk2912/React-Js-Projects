import { PiArrowLineDownFill, PiArrowLineUpFill } from "react-icons/pi";
import { FaCircleInfo } from "react-icons/fa6";

const portfolioSection = () => {
  return (
    <div className="bg-white flex rounded-lg h-auto w-full items-center p-4 font-sans justify-between flex-wrap gap-3">
      <div>
        <p className="text-sm font-medium text-gray-600 flex items-center gap-2">
          Total Portfolio Value <FaCircleInfo />
        </p>
        <h2 className="text-xl font-semibold tracking-wide max-sm:text-sm">
          ₹ 112,312.24
        </h2>
      </div>
      <div>
        <p className="text-sm font-medium text-gray-600">Wallet Balance</p>
        <span className="flex gap-2 items-center">
          <h2 className="text-xl font-semibold tracking-wide max-sm:text-sm">
            22.39401000
          </h2>
          <p className="text-xs font-semibold bg-gray-200 px-2 py-1  rounded-full text-gray-500">
            BTC
          </p>
        </span>
      </div>
      <div>
        <p></p>
        <span className="flex gap-2 items-center">
          <h2 className="text-xl font-semibold tracking-wide max-sm:text-sm">
            ₹ 1,300.00
          </h2>
          <p className="text-xs font-semibold bg-gray-200 px-2 py-1  rounded-full text-gray-500">
            INR
          </p>
        </span>
      </div>
      <div className="flex gap-3">
        <button className="bg-purple-700 text-white py-2 px-3 flex justify-center gap-2 items-center font-medium rounded-lg hover:bg-purple-800">
          <PiArrowLineUpFill className="text-xl" />
          Deposite
        </button>
        <button className="bg-purple-700 text-white py-2 px-3 flex justify-center gap-2 items-center font-medium rounded-lg hover:bg-purple-800">
          <PiArrowLineDownFill className="text-xl" />
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default portfolioSection;
