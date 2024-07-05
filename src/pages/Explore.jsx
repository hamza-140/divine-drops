import React from "react";
import Slider from "../components/Slider";
import Bottle from "../assets/bottle.png";
function Explore() {
  return (
    <div className="bg-primary-txt flex flex-col items-center">
      <div className="text-primary-txt-dark mb-10 font-Chelon text-3xl mt-10">
        Explore Essential Blends
      </div>
      <div className="flex flex-row justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 208 448"
          className="cursor-pointer"
        >
          <path
            fill="currentColor"
            d="M181 384q7 0 15-4q17-17 2-30L60 192L196 36q15-13-2-30q-14-14-30 3L4 192l162 186q4 6 15 6z"
          ></path>
        </svg>

        <Slider img={Bottle}></Slider>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 208 456"
          className="cursor-pointer"
        >
          <path
            fill="currentColor"
            d="M9 388q8 4 15 4q11 0 17-6l162-186L41 14Q26-1 11 12Q-4 29 9 42l137 156L9 354q-13 19 0 34z"
          ></path>
          4a644b
        </svg>
      </div>
      <div className="flex mt-5 justify-start mb-8">
        <button
          style={{ backgroundColor: "#4a644b" }}
          className="font-bold text-primary-txt italic py-2 px-4 rounded"
        >
          Shop Now
        </button>
      </div>{" "}
    </div>
  );
}

export default Explore;
