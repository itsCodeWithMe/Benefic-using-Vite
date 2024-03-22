import React from "react";
import Heading_Para from "../Heading_Para";
import RightArrow from "../../favicons/Group 9333.png";

function Goals_About_Template({
  classe,
  image,
  heading,
  contentPara,
  MainPara,
}) {
  return (
    <section className="my-5">
      <div className="container">
        <div
          className={`${classe} row justify-content-between align-items-center`}
        >
          <div className="col-md-5">
            <img className="w-100" src={image} alt="" />
          </div>
          <div className="col-md-6">
            <Heading_Para Heading={heading} Para={contentPara} />
            <p className="GoalsandAboutPara">{MainPara}</p>
            <button type="button" className="show_more my-5 btn  text-white">
              Show More&nbsp; &nbsp; <img src={RightArrow} alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Goals_About_Template;
