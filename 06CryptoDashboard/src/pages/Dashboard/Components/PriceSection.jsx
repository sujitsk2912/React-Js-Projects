import { ImArrowUpRight2 } from "react-icons/im";
import { HiMiniPlusCircle, HiMiniMinusCircle } from "react-icons/hi2";
import TimeSelector from "./TimeSelector";
import TransactionSection from "./TransactionSection";

const PriceSection = () => {
  return (
    <div className="h-auto w-full grid grid-cols-2 gap-4 max-md:grid-cols-1 max-sm:grid-cols-1">
      <div className="bg-white rounded-lg w-full items-center p-4">
        <div className="flex flex-col gap-5">
          <div className="flex justify-between gap-3 max-sm:flex-col flex-wrap">
            <div>
              <p className="text-sm font-medium text-gray-600">Current Price</p>
              <span className="flex gap-2 items-center">
                <h2 className="text-xl font-semibold tracking-wide max-sm:text-sm">
                  ₹ 26,670.25
                </h2>
                <p className="text-sm font-semibold text-green-500 flex gap-1 justify-center items-center">
                  <ImArrowUpRight2 />
                  0.04%
                </p>
              </span>
            </div>
            <div className="flex gap-3 max-md:text-xs h-9">
              <button className="bg-purple-700 text-white flex justify-center items-center max-sm:text-xs font-medium rounded-lg py-2 px-3 hover:bg-purple-800">
                <HiMiniPlusCircle className="text-xl p-0 m-0" />
                Buy
              </button>
              <button className="bg-purple-700 text-white py-2 px-3 flex justify-center gap-2 items-center max-sm:text-xs font-medium rounded-lg hover:bg-purple-800">
                <HiMiniMinusCircle className="text-xl" />
                Sell
              </button>
            </div>
          </div>

          <TimeSelector />

          <img
            className="w-full min-h-[116px]"
            src="../images/chart.svg"
            alt="chart"
          />

          <div className="flex justify-between items-center w-full max-sm:text-xs text-sm text-gray-500">
            <span>7:15 PM</span>
            <span>12:55 AM</span>
            <span>6:35 AM</span>
            <span>12:15 PM</span>
            <span>5:55 PM</span>
          </div>
        </div>
      </div>
      <TransactionSection />
    </div>
  );
};

export default PriceSection;
