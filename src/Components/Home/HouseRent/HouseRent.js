import React from "react";
import HouseData from "../HouseData/HouseData";
import "./HouseRent.css";
import house1 from "../../../Images/images/Rectangle 394.png";
import house2 from "../../../Images/images/Rectangle 396.png";
import house3 from "../../../Images/images/Rectangle 398.png";
import house4 from "../../../Images/images/Rectangle 403.png";
import house5 from "../../../Images/images/Rectangle 405.png";
import house6 from "../../../Images/images/Rectangle 406.png";
import { useEffect } from "react";
import { useState } from "react";

const HouseRent = () => {
  const houseData = [
    {
      name: "Washington Avenue",
      image: house1,
      location: "Nasirbad H/S, Chattogram",
      bedrooms: 3,
      bathroom: 2,
      price: 194,
    },
    {
      name: "Family Apartment",
      image: house2,
      location: "Nasirbad H/S, Chattogram",
      bedrooms: 3,
      bathroom: 2,
      price: 356,
    },
    {
      name: "Gorgeous House",
      image: house3,
      location: "Nasirbad H/S, Chattogram",
      bedrooms: 3,
      bathroom: 2,
      price: 256,
    },
    {
      name: "Luxury Villa",
      image: house4,
      location: "Nasirbad H/S, Chattogram",
      bedrooms: 3,
      bathroom: 2,
      price: 345,
    },
    {
      name: "Epic Huda Palacio",
      image: house5,
      location: "Nasirbad H/S, Chattogram",
      bedrooms: 3,
      bathroom: 2,
      price: 536,
    },
    {
      name: "Washington Avenue",
      image: house6,
      location: "Nasirbad H/S, Chattogram",
      bedrooms: 3,
      bathroom: 2,
      price: 283,
    },
  ];
  const [alldata, setAlldata] = useState([]);

  useEffect(() => {
    fetch("https://morning-falls-70460.herokuapp.com/getalldata")
      .then((res) => res.json())

      .then((data) => {
        setAlldata(data);
      });
  }, []);
  console.log(alldata);
  return (
    <section className="house-rent">
      <div className="heading">
        <p>House Rent</p>
        <h1>
          Discover the latest rent <br /> available today
        </h1>
      </div>
      <div className="body d-flex justify-content-center">
        {alldata.length === 0 ? (
          <p>loading</p>
        ) : (
          alldata.map((data) => <HouseData data={data}></HouseData>)
        )}
      </div>
    </section>
  );
};

export default HouseRent;
