import React from "react";
import CardCommunity from "../components/CardCommunity";
import armo from "../assets/armo.jpg";
import CardEducation from "../components/CardEducation";
function Education() {
  return (
    <div className="bg-primary-txt">
      <div className="flex flex-col items-center">
        <div className="text-primary-txt-dark font-Chelon text-3xl mt-10">
          Your Education Hub
        </div>
        <p className="font-Futura mb-10 text-primary-txt-dark text-center">
          Articles, Tutorial, DIYs, Guides everything whateven you need
        </p>
      </div>
      <div className="flex justify-end mr-8 mb-4">View All</div>
      <div className="flex flex-row justify-around pb-8 mx-10">
        <CardEducation
          img={armo}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
          }
        ></CardEducation>
        <CardEducation
          img={armo}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
          }
        ></CardEducation>
        <CardEducation
          img={armo}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
          }
        ></CardEducation>
      </div>
    </div>
  );
}

export default Education;
