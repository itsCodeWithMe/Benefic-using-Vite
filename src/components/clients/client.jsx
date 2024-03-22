import React from "react";
import Heading_Para from "../Heading_Para";
import Allcode from "../../favicons/Allcode.png";
import Godaddy from "../../favicons/Godaddy.png";
import Microsoft from "../../favicons/Microsoft.png";

const Heading = "We help Our Clients";
const Para =
  "Solve business problems, increase visibility, and achieve unexpected results";
function Client() {
  return (
    <>
      <div className="container">
        <Heading_Para Heading={Heading} Para={Para}></Heading_Para>

        <div className="row align-items-center my-5">
          <div className="col-md-3">
            <img className="w-100" src={Allcode} alt="" />
          </div>
          <div className="col-md-3">
            <img className="w-100" src={Godaddy} alt="" />
          </div>
          <div className="col-md-3">
            <img className="w-100" src={Microsoft} alt="" />
          </div>
          <div className="col-md-3">
            <img className="w-100" src={Godaddy} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Client;
