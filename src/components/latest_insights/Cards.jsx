import React from "react";
import CardImage1 from "../../favicons/cardImage1.png";
import RightArrow from "../../favicons/Group 9333.png";
import Card from "./Card";
import Heading_Para from "../Heading_Para";

const Heading = "Our Latest Insight";
const Para =
  "Here you can find some of our blogs Related to the Business solution";

function Cards() {
  return (
    <section className="Card">
      <div className="container">
        <Heading_Para Heading={Heading} Para={Para}></Heading_Para>
        <div className="row mb-2">
          <Card
            image={CardImage1}
            contentHeading={Heading}
            contentPara={Para}
          ></Card>
          <Card
            image={CardImage1}
            contentHeading={Heading}
            contentPara={Para}
          ></Card>
          <Card
            image={CardImage1}
            contentHeading={Heading}
            contentPara={Para}
          ></Card>
        </div>

        <button type="button" className="show_more my-5 btn text-white">
          Show More&nbsp; &nbsp; <img src={RightArrow} alt="" />
        </button>
      </div>
    </section>
  );
}

export default Cards;
