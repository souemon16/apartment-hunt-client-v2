import React from "react";
import "./HouseData.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faBed,
  faBath,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const HouseData = (props) => {
  const { name, image, location, bedrooms, bathroom, price } = props.data;
  return (
    <div className="house-card">
      <div className="house-img d-flex justify-content-center">
        <img className="img-fluid" src={image} alt="House pic" />
      </div>
      <div className="house-detail">
        <h3>{name}</h3>
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> {location}
        </p>
        <div className="house-capacity d-flex justify-content-around align-items-center">
          <small>
            {" "}
            <FontAwesomeIcon icon={faBed} /> {bedrooms} Bedrooms
          </small>
          <small>
            {" "}
            <FontAwesomeIcon icon={faBath} /> {bathroom} Bathroom
          </small>
        </div>
        <div className="d-flex justify-content-around align-items-center">
          <h2 className="price">${price}</h2>
          <Link to="/home-detail">
            <button className="btn view-details">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HouseData;
