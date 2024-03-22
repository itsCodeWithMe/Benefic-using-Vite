import React from "react";
import Image from "../favicons/images/img_1.jpg";
function Slider() {
  return (
    <div className="content">
      <div className="site-section bg-left-half mb-5">
        <div className="container owl-2-style">
          <h2 className="text-primary py-5 ">Our Products</h2>

          <div className="owl-carousel owl-2">
            <div className="media-29101">
              <a href="#">
                <img src={Image} alt="Image" className="img-fluid" />
              </a>
              <h3>
                <a href="#">Consectetur Adipisicing Elit</a>
              </h3>
            </div>
            <div className="media-29101">
              <a href="#">
                <img src={Image} alt="Image" className="img-fluid" />
              </a>
              <h3>
                <a href="#">Consectetur Adipisicing Elit</a>
              </h3>
            </div>
            <div className="media-29101">
              <a href="#">
                <img src={Image} alt="Image" className="img-fluid" />
              </a>
              <h3>
                <a href="#">Consectetur Adipisicing Elit</a>
              </h3>
            </div>
            <div className="media-29101">
              <a href="#">
                <img src={Image} alt="Image" className="img-fluid" />
              </a>
              <h3>
                <a href="#">Consectetur Adipisicing Elit</a>
              </h3>
            </div>
            <div className="media-29101">
              <a href="#">
                <img src={Image} alt="Image" className="img-fluid" />
              </a>
              <h3>
                <a href="#">Consectetur Adipisicing Elit</a>
              </h3>
            </div>
            <div className="media-29101">
              <a href="#">
                <img src={Image} alt="Image" className="img-fluid" />
              </a>
              <h3>
                <a href="#">Consectetur Adipisicing Elit</a>
              </h3>
            </div>
            <div className="media-29101">
              <a href="#">
                <img src={Image} alt="Image" className="img-fluid" />
              </a>
              <h3>
                <a href="#">Consectetur Adipisicing Elit</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
