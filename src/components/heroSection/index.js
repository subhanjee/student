import React from "react";

function HeroSection({ title, icon, heroImg, subTittle, text, Uni }) {
  return (
    <div>
      <div className="container">
        <h6 className="mt-3">Home / Accommodation/{Uni}</h6>
      </div>
      <div className="bg-[#172A7E] h-auto w-auto mt-3">
        <div className="container grid grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center items-center text-white">
            <div className="mt-[2rem]">
              <div className="flex items-center gap-2">
                {icon}
                <h5>{title}</h5>
              </div>
              <h3>{subTittle}</h3>
              <h5>{text}</h5>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <img src={heroImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
