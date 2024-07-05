import React from "react";
import plant from "../assets/plant.svg";
function Properties({ text, path }) {
  return (
    <div className="flex flex-col">
      <div
        style={{ borderWidth: 1, width: 40, height: 40, borderRadius: 20 }}
        className="flex justify-center items-center mb-1"
      >
        <img src={plant} width={30} height={30}></img>
      </div>
      <h2 className="font-Bona">{text}</h2>
    </div>
  );
}

export default Properties;
