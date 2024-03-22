import Arrowkeys from "../../favicons/Group 9376.png";

function Card({ image, contentPara, contentHeading }) {
  return (
    <div className="col-md-4">
      <div className="card">
        <img className="card-img-top" src={image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{contentHeading} </h5>
          <p className="card-text">{contentPara}</p>
          <a href="#" className="text-decoration-none">
            Read More <img src={Arrowkeys} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Card;
