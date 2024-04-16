import { Col, Row } from "antd";
import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function AlphabetArray() {
  const alphabet = Array.from({ length: 26 }, (_, index) =>
    String.fromCharCode(65 + index)
  );

  const alphabetList = alphabet.map((letter) => (
    <div
      className="hover:bg-[#172A7E] hover:text-white"
      style={{
        border: "1px solid #172A7E",
        borderRadius: ".2rem",
        padding: ".3rem",
        width: "3rem",
        textAlign: "center",
      }}
      key={letter}
    >
      {letter}
    </div>
  ));

  return (
    <div>
      <Container>
        <div className="flex gap-2 mt-4 mb-4 w-auto hidd ">{alphabetList}</div>
        <div className="bg-[#F8F9FA] p-1">
          <h5 className="text-[#172A7E] ml-2">A</h5>
        </div>
        <Row className="mt-3">
          <Col xl={10}>
            <div
              className=" text-[#172A7E] "
              style={{ textDecoration: "underline" }}
            >
              <div>
                <Link
                  to="/accomm"
                  style={{ textDecoration: "none", color: "#172A7E" }}
                >
                  <p>Abbey College London</p>
                </Link>
                <p>Abbey College London</p>
                <p>Abbey College London</p>
                <p>Abbey College London</p>
                <p>Abbey College London</p>
                <p>Abbey College London</p>
                <p>Abbey College London</p>
                <p>Abbey College London</p>
              </div>
            </div>
          </Col>
          <Col xl={10}>
            <div
              className=" text-[#172A7E] "
              style={{ textDecoration: "underline" }}
            >
              <div>
                <p>Abbey College London</p>
                <p>Abbey College London</p>
                <p>Abbey College London</p>
                <p>Abbey College London</p>
                <p>Abbey College London</p>
                <p>Abbey College London</p>
                <p>Abbey College London</p>
                <p>Abbey College London</p>
              </div>
            </div>
          </Col>
        </Row>
        <div className="bg-[#F8F9FA] p-1">
          <h5 className="text-[#172A7E] ml-2">B</h5>
        </div>
        <Row className="mt-3">
          <Col xl={10}>
            <div
              className=" text-[#172A7E] "
              style={{ textDecoration: "underline" }}
            >
              <div>
                <p>Bangor University International College (BUIC)</p>
                <p>ABarnet and Southgate College</p>
                <p>Barts and The London School of Medicine and Dentistry</p>
                <p>Bath Academy</p>
                <p>Bath College</p>
                <p>Bath College Somer Valley Campusn</p>
                <p>Bayes Business School</p>
                <p>Bedford Collegen</p>
                <p>Bangor University</p>
                <p>Bedford School</p>
                <p>Belfast Metropolitan College</p>
                <p>Bellerbys College Brighton</p>
                <p>Berlitz Manchester</p>
                <p>Birkbeck, University of London</p>
              </div>
            </div>
          </Col>
          <Col xl={10}>
            <div
              className=" text-[#172A7E] "
              style={{ textDecoration: "underline" }}
            >
              <div>
                <p>Bangor University International College (BUIC)</p>
                <p>ABarnet and Southgate College</p>
                <p>Barts and The London School of Medicine and Dentistry</p>
                <p>Bath Academy</p>
                <p>Bath College</p>
                <p>Bath College Somer Valley Campusn</p>
                <p>Bayes Business School</p>
                <p>Bedford Collegen</p>
                <p>Bangor University</p>
                <p>Bedford School</p>
                <p>Belfast Metropolitan College</p>
                <p>Bellerbys College Brighton</p>
                <p>Berlitz Manchester</p>
                <p>Birkbeck, University of London</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AlphabetArray;
