import React from "react";
import { Link, NavLink } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import laptop from "../../assets/images/laptop.jpg";
import headphone from "../../assets/images/headphone.jpg";
import ring from "../../assets/images/ring.jpg";
import watch from "../../assets/images/watch.jpg";
import airbuds from "../../assets/images/airbuds.jpg";
import keyboard from "../../assets/images/keyboard.jpg";

function Inventory() {
  const items = [
    {
      image: laptop,
      name: "Mac Book Pro",
      id: "25486548",
      status: "Active",
      price: "AED560:00",
    },
    {
      image: headphone,
      name: "HeadPhone",
      id: "25486548",
      status: "Active",
      price: "AED560:00",
    },
    {
      image: ring,
      name: "Gold Ring",
      id: "25486548",
      status: "Active",
      price: "AED560:00",
    },
    {
      image: watch,
      name: "Apple Watch",
      id: "25486548",
      status: "Active",
      price: "AED560:00",
    },
    {
      image: airbuds,
      name: "Apple Airpod",
      id: "25486548",
      status: "Active",
      price: "AED560:00",
    },
    {
      image: keyboard,
      name: "Keyboard",
      id: "25486548",
      status: "Active",
      price: "AED560:00",
    },
    {
      image: ring,
      name: "Gold Ring",
      id: "25486548",
      status: "Active",
      price: "AED560:00",
    },
    {
      image: watch,
      name: "Apple Watch",
      id: "25486548",
      status: "Active",
      price: "AED560:00",
    },
    {
      image: airbuds,
      name: "Apple Airpod",
      id: "25486548",
      status: "Active",
      price: "AED560:00",
    },
    {
      image: keyboard,
      name: "Keyboard",
      id: "25486548",
      status: "Active",
      price: "AED560:00",
    },
    {
      image: ring,
      name: "Gold Ring",
      id: "25486548",
      status: "Active",
      price: "AED560:00",
    },
    {
      image: airbuds,
      name: "Apple Airpod",
      id: "25486548",
      status: "Active",
      price: "AED560:00",
    },
  ];

  return (
    <div className="p-3" style={{ backgroundColor: "#29292A" }}>
      <div className="p-3" style={{ backgroundColor: "#29292A" }}>
        <div className="row">
          {items.map((val, index) => (
            <div className="col-md-3">
              <Link to='/inventorydetail' className=" text-decoration-none">
                <div className="br-1 inventor mb-4">
                  <div className="position-relative">
                    <img src={val.image} />
                    <div className="position-absolute">
                      <p className="mb-0">{val.name}</p>
                    </div>
                  </div>
                  <div className="d-flex flex-column p-2 gap-3 mt-3">
                    <div className="d-flex justify-content-between">
                      <small>Product ID:</small>
                      <small style={{ color: "#EEE692" }}>{val.id}</small>
                    </div>

                    <div className="d-flex justify-content-between">
                      <small>Status:</small>
                      <small style={{ color: "#EEE692" }}>{val.status}</small>
                    </div>

                    <div className="d-flex justify-content-between">
                      <small>Price:</small>
                      <small style={{ color: "#EEE692" }}>{val.price}</small>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-between mt-4">
        <div></div>
        <div className="d-flex align-items-center justify-content-center ordervalue gap-2">
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>...</button>
          <button>11</button>
          <button>12</button>
          <button>13</button>
        </div>
        <div className="d-flex align-items-center gap-2 ordervalue">
          <button className="non-active">
            <FaArrowLeft /> Previous
          </button>
          <button>
            Next <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Inventory;
