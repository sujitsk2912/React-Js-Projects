import { MdEmail } from "react-icons/md";

const EmailVerification = () => {
  return (
    <div className="bg-slate-100 h-screen w-full flex justify-center items-center">
      <div className="bg-white px-5 m-3 py-6 w-[30rem] max-w-[30rem] flex rounded-lg justify-center items-center shadow-lg">
        <div className="w-full h-full flex flex-col justify-center items-center gap-4">
          <MdEmail className="text-5xl text-violet-700" />
          <div className="flex gap-3 flex-col justify-center items-center text-center">
            <h3 className="text-2xl max-sm:text-[20px] font-semibold leading-tight ">
              Email Verification
            </h3>
            <p className="text-sm  text-gray-500">
              We have sent you an email verification to
              <span className="font-semibold text-black ml-1 mr-1">
                jenny.wilson@gmail.com.
              </span>
              If you didn’t receive it, click the button below.
            </p>
          </div>

          <button
            type="submit"
            className="bg-[#D8DDE2] text-[#797E82] h-10 w-full flex justify-center items-center  p-2 font-[500] text-sm rounded-lg transition-all hover:bg-indigo-500 hover:text-white focus:bg-indigo-400 mt-2"
          >
            Re-Send Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
