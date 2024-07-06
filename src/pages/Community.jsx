import React from "react";
import CardCommunity from "../components/CardCommunity";

function Community() {
  return (
    <div className="bg-primary-txt">
      <div className="flex flex-col items-center">
        <div className="text-primary-txt-dark font-Chelon text-3xl mt-10">
          Join The Wellness Community
        </div>
        <p className="font-Futura mb-10 text-primary-txt-dark text-center">
          for exclusive tips, insights and sign up to connect with like minded
          people.
        </p>
      </div>
      <div className="flex flex-row space-x-4 mx-10">
        <CardCommunity
          title={"Community & Events"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus delectus quia i."
          }
        ></CardCommunity>
        <CardCommunity
          title={"Community & Events"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus delectus quia i."
          }
        ></CardCommunity>
        <CardCommunity
          title={"Community & Events"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus delectus quia i."
          }
        ></CardCommunity>
      </div>
      <div className="flex mt-5 justify-center pb-8">
        <button
          style={{ backgroundColor: "#4a644b" }}
          className="font-bold text-primary-txt italic py-2 px-4 rounded"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Community;
