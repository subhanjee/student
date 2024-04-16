import React from "react";
import { Col, Row } from "antd";
import data from "../../data.json";
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
function Enteries() {
  return (
    <div className="mt-5 mb-5">
      <Row justify="center" className="gap-4">
        {data.map((item, index) => (
          <Col key={index}>
            <div className="flex justify-center items-center">
              <div className="hover w-[18rem] h-auto">
                <div className="bg-[#00202F] w-[10rem] flex p-2 text-white gap-2 rounded-md absolute ml-2 mt-2">
                <img alt="example" src= {item.icon} className=" rounded-md " />
                    {item.title}
                </div>
                <div>
                  <img alt="example" src={item.img} className=" rounded-md" />
                  <div className="flex justify-between -mt-12 gap-5 p-1">
                    <button className="flex justify-between items-center bg-white w-[8rem] p-2 rounded-md">
                      Cities <RightOutlined className="text-[.7rem]" />
                    </button>
                    <Link to="/detail" style={{textDecoration:"none" ,color:"black"}}>
                    <button className="flex justify-between items-center bg-white w-[8rem] p-2 rounded-md">
                      Universites <RightOutlined className="text-[.7rem]" />
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
              
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Enteries;
