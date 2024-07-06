import React from "react";

const CardCommunity = ({ title, description }) => {
  return (
    <div className="bg-primary-bg flex flex-col  justify-center py-9 rounded-lg shadow-md">
      <div
        style={{
          borderRadius: 40,
          marginTop: 30,
          borderWidth: 1,
          width: 80,
          height: 80,
        }}
        className="bg-primary-txt self-center mx-5 mb-2 flex justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 432 512"
        >
          <path
            fill="currentColor"
            d="M67 512h362v-43H67q-22 0-22-21t22-21h362V0H67Q39 0 21 18.5T3 64v363h4q-4 12-4 21q0 27 18 45.5T67 512zM45 64q0-21 22-21h320v341H67q-8 0-22 4V64zm86 107h192v42H131v-42zm0-86h192v43H131V85z"
          ></path>
        </svg>
      </div>
      <div className="font-Bona text-center text-primary-txt mx-5 mb-2 font-bold">
        {title}
      </div>
      <p className="mx-5 w-[250px] text-sm opacity-80 text-primary-txt text-center">
        {description}
      </p>
    </div>
  );
};

export default CardCommunity;
