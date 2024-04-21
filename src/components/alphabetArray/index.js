import React from "react";
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
      <div className="container">
        <div className="flex gap-2 mt-4 mb-4 w-auto hidd ">{alphabetList}</div>
        <div className="bg-[#F8F9FA] p-1">
          <h5 className="text-[#172A7E] ml-2">A</h5>
        </div>
        <div className="mt-3 container grid grid-cols-1 md:grid-cols-2">
          <div>
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
          </div>
          <div>
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
          </div>
        </div>
        <div className="bg-[#F8F9FA] p-1">
          <h5 className="text-[#172A7E] ml-2">B</h5>
        </div>
        <div className="mt-3 container grid grid-cols-1 md:grid-cols-2">
          <div>
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
          </div>
          <div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlphabetArray;
