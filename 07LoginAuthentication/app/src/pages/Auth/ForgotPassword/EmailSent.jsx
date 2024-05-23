const EmailSent = () => {
  return (
    <div className="bg-slate-100 h-screen w-full flex justify-center items-center">
      <div className="bg-white px-5 m-3 py-6 w-[30rem] max-w-[30rem] flex rounded-lg justify-center items-center shadow-lg">
        <div className="w-full h-full flex flex-col justify-center items-center gap-4">
          <img src={"../../../../public/images/success.svg"} alt="success" />
          <div className="flex gap-3 flex-col justify-center items-center text-center">
            <h3 className="text-2xl max-sm:text-[20px] font-semibold leading-tight ">
              Successfully Sent
            </h3>
            <p className="text-sm  text-gray-500">
              We have sent instructions on how to reset your password to
              <span className="font-semibold text-black ml-1 mr-1">
                jenny.wilson@gmail.com.
              </span>
              Please follow the instructions from the email.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSent;
