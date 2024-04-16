import { Col, Row } from "antd";
import React from "react";
import { Container } from "react-bootstrap";

function HeroSection({ title, icon, heroImg, subTittle, text,Uni }) {
  return (
    <div>
      <Container>
        <h6 className="mt-3">Home / Accommodation/{Uni}</h6>
      </Container>
      <div className="bg-[#172A7E] h-auto w-auto mt-3">
        <Row justify="center">
          <Col xl={11} lg={11}>
            <div className="flex justify-center items-center text-white">
              <div className="mt-[5rem]">
                <div className="flex items-center gap-2">
                {icon}
                <h5>{title}</h5>
                </div>
                <h3>{subTittle}</h3>
                <h5>{text}</h5>
              </div>
            </div>
          </Col>
          <Col xl={12} lg={12}>
            <div className="flex justify-center items-center">
              <div>
                <img src={heroImg} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default HeroSection;
