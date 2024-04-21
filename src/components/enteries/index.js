import React from "react";
import data from "../../data.json";
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
function Enteries() {
  return (
    <div className="mt-5 mb-5 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {data.map((item, index) => (
        <div key={index}>
          <div className="flex justify-center items-center mt-1 mb-1">
            <div className="hover w-[18rem] h-auto">
              <div className="bg-[#00202F] w-[10rem] flex text-[.8rem] p-2 text-white gap-2 rounded-md absolute ml-2 mt-2">
                <img alt="example" src={item.icon} className=" rounded-md " />
                {item.title}
              </div>
              <div>
                <img alt="example" src={item.img} className=" rounded-md" />
                <div className="flex justify-between -mt-12 gap-5 p-1">
                  <button className="flex justify-between items-center bg-white w-[8rem] p-2 rounded-md">
                    Cities <RightOutlined className="text-[.7rem]" />
                  </button>
                  <Link
                    to="/detail"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <button className="flex justify-between items-center bg-white w-[8rem] p-2 rounded-md">
                      Universites <RightOutlined className="text-[.7rem]" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Enteries;
