const SupportForm = () => {
  return (
    <form className="bg-white rounded-lg w-full p-6">
      <p className="font-semibold text-sm mb-8">
        You will receive response within 24 hours of time of submit.
      </p>
      <div className="mb-5 flex justify-between gap-6 w-full ">
        <div className="w-full">
          <label
            htmlFor="name"
            className="block mb-1 text-sm font-medium dark:text-black"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-white text-gray-600 border-1 placeholder:text-#797E82 font-normal text-sm  border-gray-200 rounded-lg w-full"
            placeholder="James"
            required
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="surname"
            className="block mb-1 text-sm font-medium dark:text-black"
          >
            Surname
          </label>
          <input
            type="text"
            id="surname"
            className="bg-white text-gray-600 border-1 placeholder:text-#797E82 border-gray-200 font-normal text-sm rounded-lg w-full"
            placeholder="Arthur"
            required
          />
        </div>
      </div>
      <div className="w-full flex flex-col">
        <label
          htmlFor="email"
          className="block mb-1 text-sm font-medium dark:text-black"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="bg-white text-gray-600 border-1 font-normal text-sm placeholder:text-#797E82 border-gray-200 rounded-lg w-full"
          placeholder="name@mail.com"
          required
        />
      </div>

      <div className="w-full mt-5">
        <label
          htmlFor="message"
          className="block mb-1 text-sm font-medium dark:text-black"
        >
          Message
        </label>
        <textarea
          id="message"
          rows="3"
          className="bg-white text-gray-600 border-1 placeholder:text-#797E82 border-gray-200 font-normal text-sm rounded-lg w-full p-2.5"
          placeholder="Your Message"
        ></textarea>
      </div>

      <div className="flex items-start mt-5 mb-5">
        <div className="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            value=""
            className="w-4 h-4 rounded-sm outline-none focus:ring-white"
            required
          />
        </div>
        <label htmlFor="terms" className="ms-2 text-sm font-medium text-black whitespace-nowrap">
          I agree with
          <a href="#" className="ms-1 font-medium text-violet-700">
            Terms & Conditions.
          </a>
        </label>
      </div>

      <div className="flex flex-col gap-3">
        <button className="bg-gray-100 h-11 max-h-11 w-full flex justify-center items-center  p-2 font-[500] text-sm rounded-lg transition-all hover:bg-gray-200 hover:text-gray-600">
          Send a Message
        </button>
        <button className="bg-gray-100 w-full flex justify-center items-center p-2 font-[500] h-11 max-h-11 text-sm rounded-lg transition-all hover:bg-gray-200 hover:text-gray-600">
          Book a Meeting
        </button>
      </div>
    </form>
  );
};

export default SupportForm;
