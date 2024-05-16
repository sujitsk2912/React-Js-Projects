// import { useEffect, useState } from "react";

const Cards = ({ data }) => {
  const URL_PATH = "http://localhost:9000";

  return (
    <>
      {data != "" ? (
        data?.map((food) => (
          <div
            key={food.name}
            className="flex flex-col items-center justify-center max-sm:mt-2 max-sm:mb-8"
          >
            <a
              href="#"
              className="bg-white max-w-[25rem] border-2  border-gray-200 rounded-xl "
            >
              <div className="flex gap-3 p-5 max-[876px]:flex-col max-[876px]:items-center max-[876px]:text-center">
                <div className=" w-fit">
                  <img
                    src={URL_PATH + food.image}
                    className="max-w-28 max-h-28 rounded-full"
                  />
                </div>

                <div className="">
                  <p className="text-gray-600 font-bold mb-2 uppercase">
                    {food.name}
                  </p>

                  <p className="text-gray-400 text-wrap">{food.text}</p>
                  <div className="flex justify-end mt-5 max-[876px]:justify-center">
                    <p className="rounded-lg text-white font-bold bg-red-500 hover:bg-red-600 py-1 px-3 text-sm w-fit h-fit">
                      ${food.price}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))
      ) : (
        <div className=" relative  w-[100vw] flex justify-center items-center left-[-120px] mt-[-80px]  text-4xl text-white font-bold">
          Items Not Found !...
        </div>
      )}
    </>
  );
};

export default Cards;
