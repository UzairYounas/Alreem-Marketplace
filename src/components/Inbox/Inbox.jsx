import React from "react";

import { IoSearchOutline } from "react-icons/io5";

import buyer1 from "../../assets/images/user-img.png";
import buyer2 from "../../assets/images/buyer2.png";
import buyer3 from "../../assets/images/buyer3.png";
import buyer4 from "../../assets/images/buyer4.png";
import buyer5 from "../../assets/images/buyer5.png";
function inbox() {
  const items = [
    {
      img: buyer1,
      name: "Michal Jorden",
    },
    {
      img: buyer2,
      name: "Whilson Doe",
    },
    {
      img: buyer3,
      name: "John Doe",
    },
    {
      img: buyer4,
      name: "David Robert",
    },
    {
      img: buyer5,
      name: "Daniel Joseph",
    },
  ];

  return (
    <div className="height-break p-4 inbox" style={{ backgroundColor: "#29292A" }}>
      <div className="position-relative">
        <input type="text" placeholder="search" className="w-100" />
        <IoSearchOutline
          style={{
            position: "absolute",
            top: "13px",
            left: "7px",
            color: "#FFFFFF",
            fontSize: '21px',
          }}
        />
      </div>

      {items.map((val, index) => (
        <div className="br-1 bg-normal-black p-3 mt-3">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-3">
              <img src={val.img} />
              <div className="d-flex flex-column gap-2 text-white">
                <h5>{val.name}</h5>
                <small>Buyer</small>
              </div>
            </div>
            <button>Go to Chat</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default inbox;
