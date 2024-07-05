import React from "react";

const CardSmall = ({ title, description }) => {
  return (
    <div className="bg-primary-bg flex flex-row justify-center items-center py-3 rounded-lg shadow-md">
      <div
        style={{ borderRadius: "50%", width: 90, height: 45 }}
        className="bg-primary-txt mx-2 mb-2 flex justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 15 15"
        >
          <path
            fill="none"
            stroke="currentColor"
            d="M7.5 15V7m0 .5v3m0-3a4 4 0 0 0-4-4h-3v3a4 4 0 0 0 4 4h3m0-3h3a4 4 0 0 0 4-4v-3h-3a4 4 0 0 0-4 4v3Zm0 0l4-4m-4 7l-4-4"
          ></path>
        </svg>
      </div>
      <div className="flex flex-col">
        <div className="italic text-primary-txt mx-5 mb-2 font-bold">
          {title}
        </div>
        <p className="mx-5 text-primary-txt">{description}</p>
      </div>
    </div>
  );
};

export default CardSmall;
