import { AiFillDollarCircle } from "react-icons/ai";
import { TbCoinBitcoinFilled } from "react-icons/tb";

const TransactionSection = () => {
  return (
    <div className="bg-white rounded-lg w-full p-4 font-sans flex flex-col justify-around">
      <div>
        <h3 className="text-sm font-medium text-gray-600 mb-4">
          Recent Transactions
        </h3>
      </div>
      <div className="w-full flex flex-col gap-6">
        <div className="flex justify-between">
          <span className="flex justify-between items-center gap-3">
            <span className="rounded-full h-fit w-fit p-2 flex justify-center items-center bg-gray-200">
              <AiFillDollarCircle className="text-2xl" />
            </span>
            <div>
              <h2 className="text-base font-medium">INR Deposite</h2>
              <p className="text-sm text-gray-500">2022-06-09 7:06 PM</p>
            </div>
          </span>
          <p className="max-sm:text-sm whitespace-nowrap text-base font-semibold">
            +₹ 81,123.10
          </p>
        </div>
        <div className="flex justify-between">
          <span className="flex justify-between items-center gap-3">
            <span className="rounded-full h-fit w-fit p-2 flex justify-center items-center bg-gray-200">
              <TbCoinBitcoinFilled className="text-2xl" />
            </span>
            <div>
              <h2 className="text-base font-medium">BTC Sell</h2>
              <p className="text-sm text-gray-500">2022-05-27 12:32 PM</p>
            </div>
          </span>
          <div className="text-end">
            <p className="max-sm:text-sm whitespace-nowrap text-base font-semibold">
              -12.48513391 BTC
            </p>
            <p className="text-sm text-gray-500">+$ 82,123.10</p>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="flex justify-between items-center gap-3">
            <span className="rounded-full h-fit w-fit p-2 flex justify-center items-center bg-gray-200">
              <AiFillDollarCircle className="text-2xl" />
            </span>
            <div>
              <h2 className="text-base font-medium">INR Deposite</h2>
              <p className="text-sm text-gray-500">2022-06-09 7:06 PM</p>
            </div>
          </span>
          <p className="max-sm:text-sm whitespace-nowrap text-base font-semibold">
            +₹ 81,123.10
          </p>
        </div>
      </div>
      <button className="bg-slate-200 w-full flex justify-center items-center p-2 font-bold rounded-lg transition-all hover:bg-slate-300 mt-4">
        View All
      </button>
    </div>
  );
};

export default TransactionSection;
