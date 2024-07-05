import React from "react";
function Slider({ img }) {
  return (
    <div className="flex flex-row space-x-10 mx-20">
      <div className="flex flex-col items-center space-y-2">
        <img src={img} width={200} height={200}></img>
        <div className="flex flex-col items-center">
          <p style={{ letterSpacing: "3px" }} className="font-Bona">
            LAVENDER
          </p>
          <p style={{ letterSpacing: "3px" }} className="font-Bona">
            ESSENTIAL OIL
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <img src={img} width={200} height={200}></img>
        <div className="flex flex-col items-center">
          <p style={{ letterSpacing: "3px" }} className="font-Bona">
            LAVENDER
          </p>
          <p style={{ letterSpacing: "3px" }} className="font-Bona">
            ESSENTIAL OIL
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <img src={img} width={200} height={200}></img>
        <div className="flex flex-col items-center">
          <p style={{ letterSpacing: "3px" }} className="font-Bona">
            LAVENDER
          </p>
          <p style={{ letterSpacing: "3px" }} className="font-Bona">
            ESSENTIAL OIL
          </p>
        </div>
      </div>
    </div>
  );
}

export default Slider;
