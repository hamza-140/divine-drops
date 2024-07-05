import React from "react";
import Slider from "../components/Slider";
import Bottle from "../assets/bottle.png";
import Card from "../components/Card";
import CardSmall from "../components/CardSmall";

function Benefits() {
  return (
    <div className="bg-primary-txt flex flex-col items-center">
      <div className="text-primary-txt-dark font-Chelon text-3xl mt-10">
        Your Peace And Wellness
      </div>
      <p className="font-Futura mb-10 text-primary-txt-dark text-center">
        Discover the difference of personalized care and precision in every
        aspect of your journey with us.
      </p>
      <div className="grid grid-cols-2 gap-6 mx-5 mb-10">
        <Card
          title="Essential Oil Guide"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae est, illo nihil dolorem architecto aliquam porro iste rem neque? Cumque perspiciatis at corrupti libero repudiandae a accusantium culpa. Optio, a?"
        />

        <div className="grid grid-rows-3 gap-6 mx-5">
          <CardSmall
            title="Safety and Transparency"
            description="Detailed information about each product, ensuring you know exactly what you are applying to your skin."
          />
          <CardSmall
            title="Community Engagement"
            description="Every purchase contributes to community projects and special causes, making each acquisition a celebration."
          />
          <CardSmall
            title="Plant-Based Formulation"
            description="Testament to the power of nature, with every component selected for its efficacy and purity."
          />
        </div>
      </div>
    </div>
  );
}

export default Benefits;
