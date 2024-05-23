import { Link } from "react-router-dom";

const RegistrationSuccess = () => {
  return (
    <div className="bg-slate-100 h-screen w-full flex justify-center items-center">
      <div className="bg-white px-5 m-3 py-6 w-[30rem] max-w-[30rem] flex rounded-lg justify-center items-center shadow-lg">
        <div className="w-full h-full flex flex-col justify-center items-center gap-4">
          <img src={"../../../../public/images/success.svg"} alt="success" />
          <div className="flex gap-3 flex-col justify-center items-center text-center">
            <h3 className="text-2xl max-sm:text-[20px] font-semibold leading-tight ">
              Successfully Registration
            </h3>
            <p className="text-sm  text-gray-500">
              Hurray! You have successfully created your account. Enter the app
              to explore all it’s features.
            </p>
          </div>

          <Link to={"/"} className="w-full">
            <button
              type="submit"
              className="  h-10 w-full flex justify-center items-center  p-2 font-[500] text-sm rounded-lg transition-all bg-indigo-500 hover:bg-indigo-600 text-white mt-2"
            >
              Enter the App
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
