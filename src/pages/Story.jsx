import React from "react";
import story from "../assets/story.png";
import Properties from "../components/Properties";
function Story() {
  return (
    <div className="bg-primary-txt">
      <div className="flex flex-row mb-5 justify-center items-center">
        <div className="ml-10">
          <img src={story} width={700} height={700}></img>
        </div>
        <div className="flex flex-col mx-10">
          <div className="font-Chelon text-3xl">Our Story</div>
          <div className="text-start ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In est
            veniam sint dignissimos, maiores tenetur? Libero corporis earum
            asperiores ex perspiciatis dolore non, voluptas mollitia nihil rerum
            debitis officiis aliquam.
          </div>
          <div className="flex justify-start mt-3">
            <button className="bg-primary-bg text-primary-txt font-bold italic py-2 px-4 rounded">
              Know More
            </button>
          </div>{" "}
        </div>
      </div>
      <div className="flex flex-row pb-10 space-x-32 mx-auto justify-center">
        <Properties text={"Vegan"}></Properties>
        <Properties text={"Vegan"}></Properties>
        <Properties text={"Vegan"}></Properties>
        <Properties text={"Vegan"}></Properties>
      </div>
    </div>
  );
}

export default Story;
