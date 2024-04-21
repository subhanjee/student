import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import cardData from "../../cardData.json";

function Carousels() {
  return (
    <div>
      <Carousel>
        {cardData.map((item, index) => (
          <div key={index} className="flex justify-center items-center w-[5rem]">
            {/* Assuming each item has img, img1, img2, img3 properties */}
            <img  src={item.img} alt="" />
            <img src={item.img1} alt="" />
            <img src={item.img2} alt="" />
            <img src={item.img3} alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Carousels;
