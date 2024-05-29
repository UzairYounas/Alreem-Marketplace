import React, { useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";

import { BsThreeDotsVertical } from "react-icons/bs";

import laptop from "../../assets/images/laptop.jpg";
import mac1 from "../../assets/images/mac1.jpg";
import mac2 from "../../assets/images/mac2.jpg";
import mac3 from "../../assets/images/mac3.jpg";
import mac4 from "../../assets/images/mac4.jpg";
import mac5 from "../../assets/images/mac5.jpg";
import muser from "../../assets/images/muser.png";
import smallstars from "../../assets/images/smallstars.png";
import bigstars from "../../assets/images/bigstars.png";

function InventoryDetail({direction, ...args }) {
  const [modal, setModal] = useState(false);

  const reviews = [
    {
      userimage: muser,
      star: smallstars,
      title: "Michael Jorden",
      date: "19 March, 2024",
      description:
        "I recently invested in a new keyboard, and I must say, it has truly transformed my computing experience.",
    },
    {
      userimage: muser,
      star: smallstars,
      title: "chris lany",
      date: "28 April, 2024",
      description:
        "I recently invested in a new keyboard, and I must say, it has truly transformed my computing experience.",
    },
    {
      userimage: muser,
      star: smallstars,
      title: "Michael Jorden",
      date: "19 March, 2024",
      description:
        "I recently invested in a new keyboard, and I must say, it has truly transformed my computing experience.",
    },
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const items = [
    {
      name: "RGB Gradient Lighting Keyboard",
      id: "AED 250",
      available: "4 items (only)",
      description:
        "Headphones have revolutionized the way we experience audio, offering a personalized and immersive sound and  experience thats intimate and portable.",
    },
  ];

  return (
    <div className="height-break p-3" style={{ backgroundColor: "#29292A" }}>
      <div className="row mb-3">
        <div className="col-md-7">
          <div className="br-1 p-2 d-flex align-items-center gap-4">
            <div className="d-flex flex-column gap-3 invent-det">
              <img src={mac1} className="rounded" />
              <img src={mac2} className="rounded" />
              <img src={mac3} className="rounded" />
              <img src={mac4} className="rounded" />
              <img src={mac5} className="rounded" />
            </div>
            <img src={laptop} className="rounded" style={{ width: "450px" }} />
          </div>
        </div>
        <div className="col-md-5"> 
          {items.map((val, index) => (
            <div className="br-1 px-3 py-4 d-flex flex-column text-white gap-3">
              <div className="d-flex align-items-center justify-content-between">
                <h4>{val.name}</h4>
                <BsThreeDotsVertical className="text-white" style={{ cursor: 'pointer' }} onClick={()=> setModal(true)} />
              </div>
              <p style={{ color: "#EEE692" }}>{val.id}</p>

              <div className="d-flex justify-content-between color-select">
                <p>color</p>
                <div className="d-flex gap-3">
                  <div
                    className="color-ball"
                    style={{
                      backgroundColor: "#5A4B90",
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                    }}
                  ></div>
                  <div
                    className="color-ball"
                    style={{
                      backgroundColor: "#80F0FF",
                    }}
                  ></div>
                  <div
                    className="color-ball"
                    style={{
                      backgroundColor: "#FF63EF",
                    }}
                  ></div>
                  <div
                    className="color-ball"
                    style={{
                      backgroundColor: "#FFEA7F",
                    }}
                  ></div>
                  <div
                    className="color-ball"
                    style={{
                      backgroundColor: "#FF7373",
                    }}
                  ></div>
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <p>Product Availability</p>
                <p>{val.available}</p>
              </div>
              <p>Product Size</p>

              <div className="br-1 w-100">
                <Dropdown
                  isOpen={dropdownOpen}
                  toggle={toggle}
                  direction={direction}
                >
                  <DropdownToggle caret className="drop-btn">
                    Check size
                  </DropdownToggle>
                  <DropdownMenu {...args}>
                    <DropdownItem
                      divider
                      style={{ backgroundColor: "#3D4348" }}
                    />
                    <DropdownItem>32</DropdownItem>
                    <DropdownItem
                      divider
                      style={{ backgroundColor: "#3D4348" }}
                    />
                    <DropdownItem>34</DropdownItem>
                    <DropdownItem
                      divider
                      style={{ backgroundColor: "#3D4348" }}
                    />
                    <DropdownItem>36</DropdownItem>
                    <DropdownItem
                      divider
                      style={{ backgroundColor: "#3D4348" }}
                    />
                    <DropdownItem>38</DropdownItem>
                    <DropdownItem
                      divider
                      style={{ backgroundColor: "#3D4348" }}
                    />
                    <DropdownItem>40</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>

              <div className="d-flex flex-column gap-2">
                <p style={{ color: "#EEE692" }}>Product Details</p>
                <p>{val.description}</p>
              </div>
            </div>
          ))}
          
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="br-1 text-white p-1">
            <div className="p-2" style={{ backgroundColor: "#2A2A2A" }}>
              <h5>Reviews</h5>
            </div>
            <div className="bg-normal-black p-2 d-flex gap-4 rounded">
              <div className="d-flex flex-column gap-3 review">
                {reviews.map((data, index) => (
                  <div className="br-1 p-2 d-flex gap-3 align-items-center">
                    <div className="d-flex flex-column align-items-center text-center gap-2">
                      <img src={data.userimage} style={{ width: "70px" }} />
                      <small>{data.title}</small>
                      <small style={{ color: "#909090" }}>{data.date}</small>
                    </div>
                    <div className="d-flex flex-column gap-2 md-small">
                      <img src={data.star} />
                      <small>{data.description}</small>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ borderLeft: "1px solid #3D4348" }}></div>
              <div className="d-flex flex-column align-items-center justify-content-center gap-2 md-box">
                <p className="mb-0">Average Rating</p>
                <p className="mb-0">4.0</p>
                <img src={bigstars} />
                <small>400 reviews</small>
              </div>
            </div>
          </div>

          <Modal isOpen={modal} size="md" centered={true}>
            <ModalBody
              className="br-1 bg-normal-black"
              style={{ borderRadius: "15px", padding: "15px 0" }}
            >
              <div className="d-flex flex-column align-items-center justify-content-center text-center text-white">
                <p className="mb-0">Edit this Product</p>
                <hr className="hr-2 w-100" />
                <p className="mb-0">View Shipping Areas</p>
                <hr className="hr-2 w-100" />
                <p className="mb-0">Delete this Product</p>
                <hr className="hr-2 w-100" />
                <p className="mb-0">Active this Product</p>
                <hr className="hr-2 w-100" />
                <p
                  className="text-danger mb-0"
                  style={{ cursor: "pointer" }}
                  onClick={()=> setModal(false)}
                >
                  Cancel
                </p>
              </div>
            </ModalBody>
          </Modal>

        </div>
      </div>
    </div>
  );
}

export default InventoryDetail;
