import React from "react";
import Heading_Para from "../Heading_Para";
import Service_card from "./service_card";
import UIUX_Design from "../../favicons/UIUX_Design.svg";
import Cloud_infrastructure from "../../favicons/Cloud_infrastructure.svg";
import Digital_Marketing from "../../favicons/Digital_Marketing.svg";
import Mobile_Application from "../../favicons/Mobile_Application.svg";
import Web_Application from "../../favicons/Web_Application.svg";
import RoboAutomation from "../../favicons/RoboAutomation.svg";

const Heading = "Services";
const Para =
  "We are dedicated team of storytellers thinking and problem solving";

const array1 = [
  "UI/UX Design",
  "Web Application",
  "Mobile Application",
  "Digital Marketing",
  "Cloud Infrastructure",
  "Robotics and Automation",
];
const array2 = [
  "UI/UX expertise we've developed has become the link between our clients and their target audience. We position your company as a leader in your market through eye-catching web design, mobile app design, and more for a positive user experience.",
  "We can help you create an impressive online presence that draws new customers, keeps old ones, and increases customer confidence in your company. Take advantage of our web design services today. Put your brand's personality across with bespoke design.",
  "Benefic manages the whole mobile application development cycle, regardless of how diverse or complex your requirements are. Our ability to meet your objectives is a result of our experienced team's years of expertise in the global application solution and product engineering sectors.",
  "Benefic manages the whole mobile application development cycle, regardless of how diverse or complex your requirements are. Our ability to meet your objectives is a result of our experienced team's years of expertise in the global application solution and product engineering sectors.",
  "We help you build public clouds, administer private clouds, or provide cloud computing services like Infrastructure-as-a-Service, Platform-as-a-Service, and Software-as-a-Service (SaaS).",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
];
const array3 = [
  UIUX_Design,
  Web_Application,
  Mobile_Application,
  Digital_Marketing,
  Cloud_infrastructure,
  RoboAutomation,
];
const itemsPerRow = 3;

function Services() {
  return (
    <div className="container">
      <Heading_Para
        className="my-4"
        Heading={Heading}
        Para={Para}
      ></Heading_Para>
      {[...Array(Math.ceil(array1.length / itemsPerRow))].map((_, rowIndex) => (
        <div key={rowIndex} className="row">
          {array1
            .slice(rowIndex * itemsPerRow, rowIndex * itemsPerRow + itemsPerRow)
            .map((item, colIndex) => (
              <div key={colIndex} className="col-md-4">
                <Service_card
                  Card_title={item}
                  Card_para={array2[rowIndex * itemsPerRow + colIndex]}
                  image={array3[rowIndex * itemsPerRow + colIndex]}
                />
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default Services;
