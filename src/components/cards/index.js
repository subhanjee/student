import React from "react";
import cardData from "../../cardData.json";
import { Badge } from "antd";
import {
  ClockCircleOutlined,
  EnvironmentOutlined,
  RightOutlined,
  EyeOutlined,
  GiftOutlined,
} from "@ant-design/icons";
function Cards() {
  return (
    <div className="mt-5 mb-5 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {cardData.map((item, index) => (
        <div>
          <Badge
            size="small"
            count={1}
            color="white"
            className="absolute text-black z-30 mt-3 ml-3"
          ></Badge>
          <div className="bg-[#D42398] text-[1rem] font-bold text-center text-white w-[2rem] h-[1.8rem]  rounded-sm absolute mt-4 ml-5">
            <GiftOutlined />
          </div>
          <div className="flex justify-center items-center flex-col ">
            <div className="bg-white flex flex-col rounded-sm p-2">
              <img
                src="https://casita-img.imgix.net/uploads/buildings/133899/building/orig/grand-felda-house-wembley-40364418920230714033148PM.jpeg?auto=compress,format&trim=auto&fit=clamp"
                alt="abc"
              />
              <div className="mt-1">
                <h6 className="text-[#172A7E]">{item.title}</h6>
              </div>
              <div className="flex gap-1  items-center mt-1 mb-1">
                <EnvironmentOutlined className="-mt-3" />
                <div className="text-[.7rem]">{item.location}</div>
              </div>
              <div className="flex gap-1  items-center mt-1 mb-1">
                <ClockCircleOutlined className="-mt-3" />
                <div className="text-[.7rem]">{item.time}</div>
              </div>
              <div className="bg-[#E9ECEF] w-[5rem] text-center p-1 rounded-sm mt-2">
                {item.enSuite}
              </div>

              <div className="mt-2">
                From{" "}
                <a
                  href="abc"
                  style={{
                    color: "#761455",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  {item.price}
                </a>{" "}
                /week
              </div>
              <div className="flex justify-between mt-2  gap-2 p-1">
                <button className="flex justify-between items-center text-white bg-black w-[7rem] p-2 rounded-md">
                  View Room <RightOutlined className="text-[.7rem]" />
                </button>
                {/* <Link to="/detail" style={{textDecoration:"none" ,color:"black"}}> */}
                <button className="flex justify-between items-center text-black w-[7rem] p-2 rounded-md border-solid border-1 border-[#761455] ">
                  Quick View <EyeOutlined className="text-[.7rem] " />
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
