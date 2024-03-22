import React from "react";

function Service_card({ image, Card_title, Card_para }) {
  return (
    <div className="card services py-4 px-2 my-5 mb-1">
      <div className="service_card d-flex align-items-center ">
        <img className="card-img-top" src={image} alt="Card image cap" />
        <h5 className="card-title text-capitalize">{Card_title}</h5>
      </div>
      <div className="card-body">
        <p className="card-text">{Card_para}</p>
      </div>
    </div>
  );
}

export default Service_card;
