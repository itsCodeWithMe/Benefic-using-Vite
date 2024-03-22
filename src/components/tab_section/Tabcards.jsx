import React from "react";
import MongoDB from "../favicons/Mongo DB.png";
import ReactImg from "../favicons/React.png";
import Python from "../favicons/Python.png";
import Magento from "../favicons/Magento.png";
import NodeJS from "../favicons/Node JS.png";
function Tabcards() {
  return (
    <div className="images">
      <div className="row">
        <div className="col-md image">
          "<img className="backgroundImage" src={MongoDB} alt="" />
        </div>
        <div className="col-md image">
          "<img className="backgroundImage" src={ReactImg} alt="" />
        </div>
        <div className="col-md image">
          "<img className="backgroundImage" src={Python} alt="" />
        </div>
        <div className="col-md image">
          "<img className="backgroundImage" src={Magento} alt="" />
        </div>
        <div className="col-md image">
          "<img className="backgroundImage" src={NodeJS} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Tabcards;
