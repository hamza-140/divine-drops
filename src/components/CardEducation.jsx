import React from "react";

const CardEducation = ({ img, description }) => {
  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: 250,
        width: 250,
        backgroundImage: `url(${img})`,
      }}
      className="bg-primary-bg flex flex-col  justify-end pb-5 rounded-lg shadow-md"
    >
      <p className="mx-5 italic text-sm font-semibold text-primary-txt text-center">
        {description}
      </p>
    </div>
  );
};

export default CardEducation;
