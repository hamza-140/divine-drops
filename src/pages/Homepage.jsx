import React from "react";
import bottle from "../assets/bottle.png";
import Marquee from "react-fast-marquee";
import MarqueeDrop from "../components/MarqueeDrop";

function Homepage() {
  return (
    <div className="flex flex-col bg-primary-bg">
      <div className="mx-20 flex flex-row justify-between mt-20">
        <div className="flex flex-col">
          <div className="font-Chelon text-3xl text-primary-txt mb-5">
            Discover the Transformative <br /> Power of Essential Oil
          </div>
          <div className="text-primary-txt font-Futura mb-4">
            Beyond Oils: Crafted Wellness Experiences. Elevate your <br />
            ambiance and wellness routine with our expertly tailored <br />
            oil & blends.
          </div>
          <div className="flex justify-start">
            <button className="bg-primary-txt font-bold italic py-2 px-4 rounded">
              Shop Now
            </button>
          </div>
        </div>
        <img
          className="mt-[-50px]"
          src={bottle}
          width={500}
          height={500}
          alt="Bottle"
        />
      </div>
      <Marquee>
        <MarqueeDrop text={"Skincare"}></MarqueeDrop>
        <MarqueeDrop text={"Haircase"}></MarqueeDrop>
        <MarqueeDrop text={"Aromatheraphy"}></MarqueeDrop>
        <MarqueeDrop text={"Massage"}></MarqueeDrop>
        <MarqueeDrop text={"Inhalation"}></MarqueeDrop>
        <MarqueeDrop text={"Skincare"}></MarqueeDrop>
        <MarqueeDrop text={"Haircase"}></MarqueeDrop>
        <MarqueeDrop text={"Aromatheraphy"}></MarqueeDrop>
        <MarqueeDrop text={"Massage"}></MarqueeDrop>
        <MarqueeDrop text={"Inhalation"}></MarqueeDrop>
      </Marquee>
    </div>
  );
}

export default Homepage;
