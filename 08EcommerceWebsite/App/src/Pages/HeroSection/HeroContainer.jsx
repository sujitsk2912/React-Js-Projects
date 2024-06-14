import "./HeroSection.scss";

const HeroContainer = () => {
  return (
    <section className="container-fluid h-[calc(100vh-60px)] flex justify-center items-center w-full pl-8 pr-8">
      <div className="grid-content grid grid-cols-2 justify-center items-center max-w-[1280px]">
        <div className="max-sm:mt-4 flex justify-center items-center flex-col gap-2">
          <h1 className="text-9xl uppercase font-[600] text-white">Sales</h1>
          <p className="text-center text-white ml-20 mr-20 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ullam
            ratione natus ex autem error!
          </p>
          <div className="flex gap-6 mt-4 ">
            <button className="btn-read bg-transparent border-2 border-white text-white  px-4 py-2 text-sm font-medium outline-none ">
              Read More
            </button>
            <button className="btn-shop bg-white px-4 border-2 border-white  py-2 text-sm font-medium outline-none">
              Shop Now
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center bg-transparent ">
          {/* */}
          <img
            src="/src/assets/banner-img.png"
            alt="banner"
            className="img-banner h-[37rem] w-auto max-lg:h-auto max-lg:max-h-[30rem]"
            // h-[37rem] w-auto max-lg:h-auto max-lg:max-h-[30rem]
          />
        </div>
      </div>
    </section>
  );
};

export default HeroContainer;
