import React from "react";
import CardImg from "../components/CardImg";
import CardImgSmall from "../components/CardImgSmall";

function Service() {
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
        <CardImg title="AROMATHERAPY" />

        <div className="grid grid-cols-2 gap-6 mx-5">
          <CardImgSmall title="SKINCARE" />
          <CardImgSmall title="Massage" />
          <CardImgSmall title="INHALATION" />
          <CardImgSmall title="HAIRCARE" />
        </div>
      </div>
    </div>
  );
}

export default Service;
