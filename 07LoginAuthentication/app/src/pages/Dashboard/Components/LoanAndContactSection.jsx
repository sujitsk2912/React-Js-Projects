const LoanAndContactSection = () => {
  return (
    <section>
      <div className=" grid grid-cols-2 max-md:grid-cols-1 max-sm:grid-cols-1  items-center  font-sans justify-center gap-4">
        <div className="bg-white  flex flex-col rounded-lg h-auto w-full p-4 gap-3">
          <span className="bg-purple-700  text-white px-3 py-1 rounded-full w-fit font-[500]">
            Loans
          </span>
          <h2 className="text-lg font-semibold max-w-lg max-sm:text-lg">
            Learn more about Loans – Keep your Bitcoin, access it’s value
            without selling it
          </h2>
        </div>
        <div className="bg-purple-700 text-white flex flex-col rounded-lg h-auto w-full p-4 gap-3">
          <span className="bg-white text-purple-700 px-2 py-1 rounded-full w-fit font-[600]">
            Contact
          </span>
          <h2 className="text-lg font-semibold max-w-lg max-sm:text-lg">
            Learn more about our real estate, mortgage, and corporate account
            services
          </h2>
        </div>
      </div>
    </section>
  );
};

export default LoanAndContactSection;
