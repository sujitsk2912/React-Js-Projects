import React from "react";

function Content() {
  return (
    <section className="flex justify-center items-center w-full mt-20">
      <div
        className="container flex flex-wrap flex-row max-w-screen-xl w-4/5 p-4"
        style={{ width: "100%" }}
      >
        <div className="left-content w-2/4 p-3">
          <h1 className="text-content text-8xl font-extrabold flex-wrap text-wrap mb-5 text-wrap text-wrap ">
            YOUR FEET DESERVE THE BEST
          </h1>
          <p className="text-justify text-xs font-semibold mb-5">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>

          <div className="buttons flex justify-start gap-5 mb-5">
            <button className="rounded-sm bg-red-600 text-white hover:bg-red-700 font-semibold px-4 py-1 bordered-1">
              Shop Now
            </button>
            <button className="rounded-sm font-semibold px-4 py-1 border-2 bg-transperent">
              Category
            </button>
          </div>

          <div>
            <p className="text-xs">Also Available On</p>
            <span className="flex gap-3 items-center mt-3">
              <img
                className="website-logo"
                src="/public/images/flipkart.png"
                alt=""
              />
              <img
                className="website-logo"
                src="/public/images/amazon.png"
                alt=""
              />
            </span>
          </div>
        </div>
        <div className="right-content  w-2/4">
          <div>
            <img className="shoe-logo" src="/public/images/shoes.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
