import React from "react";
import { Link } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";

import laptop from "../../assets/images/laptop.jpg";
import headphone from "../../assets/images/headphone.jpg";
import ring from "../../assets/images/ring.jpg";
import watch from "../../assets/images/watch.jpg";
import airbuds from "../../assets/images/airbuds.jpg";
import keyboard from "../../assets/images/keyboard.jpg";
import InventoryProduct from "./InventoryProduct";

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

  const truncateName = (name) => {
    return name.length > 15 ? name.slice(0, 15) + '...' : name;
  };

  const truncatedItems = items.map(item => ({
    ...item,
    name: truncateName(item.name)
  }));

  return (
    <div className="height-break p-3" style={{ backgroundColor: "#29292A" }}>
      
      <div className="d-flex align-items-center justify-content-between gap-3 mb-4">
        <div className="d-lg-block d-md-block d-sm-none d-none"></div>
        <div
          className="position-relative p-2 nav-add search-btn"
        >
          <input type="text" placeholder="search..." className="ps-4" />
          <CiSearch
            className="text-white position-absolute h4"
            style={{ left: "7px", top: "9px" }}
          />
        </div>

        <Link
          to="/editproduct"
          className="d-flex align-items-center justify-content-center px-3 py-2 gap-3 nav-add nav-btn text-white"
          style={{ cursor: "pointer" }}
        >
          <p className="mb-0">Add Product</p>
          <FaPlus />
        </Link>
      </div>

      <InventoryProduct items={truncatedItems} />

      <div className="d-flex align-items-center justify-content-between mt-4">
        <div></div>
        <div className="d-lg-flex d-md-flex d-sm-none d-none align-items-center justify-content-center ordervalue gap-2">
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
