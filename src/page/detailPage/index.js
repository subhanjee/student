import React from "react";
import Header from "../../components/header";
import HeroSection from "../../components/heroSection";
 import Footer from "../../footer";
import AlphabetArray from "../../components/alphabetArray";

function DetailPage() {
  return (
    <div>
      <Header />
      <HeroSection
        title="UNITED KINGDOM"
        subTittle="Universities and Colleges "
        Uni="United Kingdom "
        icon={
          <img
            src="https://assets.casita.com/_next/static/media/uk-flag.e69f64fb.svg"
            alt=" "
          />
        }
        heroImg="https://www.casita.com/images/countries/1/orig/uk-77089916720240220021231PM.png"
      />
      <AlphabetArray/>
       <Footer />
    </div>
  );
}

export default DetailPage;
