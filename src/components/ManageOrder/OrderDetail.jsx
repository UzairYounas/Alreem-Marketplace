import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, ModalBody } from "reactstrap";

import { FaArrowLeft } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoCard } from "react-icons/io5";
import { TbBus } from "react-icons/tb";
import { BsCheck } from "react-icons/bs";
import { BsShop } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

import product1 from "../../assets/images/product1.png";
import product2 from "../../assets/images/product2.png";
import product3 from "../../assets/images/product3.png";

import bigstars from "../../assets/images/bigstars.png";
import smallstars from "../../assets/images/smallstars.png";
import muser from "../../assets/images/muser.png";

function OrderDetail(args) {
  const items = [
    {
      img: product1,
      name: "Vitality vibeshoes",
      price: "AED500",
      quantity: "1",
      size: "40",
      color: "Pink",
    },
    {
      img: product2,
      name: "Diamond Ring",
      price: "AED 350",
      quantity: "1",
      size: "40",
    },
    {
      img: product3,
      name: "Power Bank",
      price: "AED500",
      quantity: "1",
      size: "40",
    },
  ];

  const info = [
    {
      img: <FaUser />,
      heading: "Buyer Details",
      title1: "Name",
      description1: "Michael Jorden",
      title2: "Phone Number",
      description2: "+9914876498562",
      title3: "Email Address",
      description3: "micheljordan@gmail.com",
    },
    {
      img: <IoCard />,
      heading: "Payment Method",
      title1: "Total Amount",
      description1: "1024:00 AED",
      title2: "Delivery Charges",
      description2: "20:00 AED",
      title3: "Order Placed on",
      description3: "2024-11-14,1447",
      title4: "Order Id",
      description4: "ALREEM-1",
    },
    {
      img: <TbBus />,
      heading: "Shipping Method",
      title1: "Tracking Id",
      description1: "ALREEM-1",
      title2: "Address",
      description2: "96 church way bradbury",
      title3: "Alternative Address",
      description3: "96 church way bradbury",
      title4: "Country",
      description4: "United Arab Emirates (UAE)",
      title5: "City",
      description5: "Abu Dhabi",
      title6: "Postal Code",
      description6: "65488",
    },
  ];

  const [showData, setShowData] = useState(false);
  const [showDispatch, setShowDispatch] = useState(false);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <Link
        to="/manageorder"
        className="text-white text-decoration-none mb-2 animated-link"
      >
        <span className="back-icon">
          <FaArrowLeft />
        </span>
        &nbsp;Chat Support
      </Link>
      
      <div
        className="height-break p-3 mt-2"
        style={{ backgroundColor: "#29292A" }}
      >
        <div className="row">
          <div className="col-md-7">
            <div className="br-1 p-3">
              <h5 className="tit4">Order Details</h5>
              {items.map((val, index) => (
                <>
                  <div className="d-flex flex-column gap-2 order-detail">
                    <img src={val.img} />
                    <div className="d-flex align-items-center justify-content-between">
                      <small style={{ color: "#909090" }}>Product Name</small>
                      <small>{val.name}</small>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                      <small style={{ color: "#909090" }}>Price</small>
                      <small>{val.price}</small>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                      <small style={{ color: "#909090" }}>Quantity</small>
                      <small>{val.quantity}</small>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                      <small style={{ color: "#909090" }}>Size</small>
                      <small>{val.size}</small>
                    </div>

                    {val.color && (
                      <div className="d-flex align-items-center justify-content-between">
                        <small style={{ color: "#909090" }}>Color</small>
                        <small>{val.color}</small>
                      </div>
                    )}
                  </div>
                  <hr className="hr-2" />
                </>
              ))}
            </div>
          </div>

          <div className="col-md-5">
            <div className="br-1 p-3">
              <h5 className="tit4">Order Info</h5>
              {info.map((data, index) => (
                <div className="d-flex flex-column gap-3 mt-3 mb-3 order-info">
                  <div className="d-flex align-items-center gap-2">
                    <div className="buyer-img d-flex align-items-center justify-content-center">
                      {data.img}
                    </div>
                    <h5>{data.heading}</h5>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <small style={{ color: "#909090" }}>{data.title1}</small>
                    <small>{data.description1}</small>
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <small style={{ color: "#909090" }}>{data.title2}</small>
                    <small>{data.description2}</small>
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <small style={{ color: "#909090" }}>{data.title3}</small>
                    <small>{data.description3}</small>
                  </div>

                  {data.title4 && (
                    <div className="d-flex align-items-center justify-content-between">
                      <small style={{ color: "#909090" }}>{data.title4}</small>
                      <small>{data.description4}</small>
                    </div>
                  )}

                  {data.title5 && (
                    <div className="d-flex align-items-center justify-content-between">
                      <small style={{ color: "#909090" }}>{data.title5}</small>
                      <small>{data.description5}</small>
                    </div>
                  )}

                  {data.title6 && (
                    <div className="d-flex align-items-center justify-content-between">
                      <small style={{ color: "#909090" }}>{data.title6}</small>
                      <small>{data.description6}</small>
                    </div>
                  )}
                </div>
              ))}
              <div className="br-1 p-2">
                <div className="d-flex align-items-center justify-content-between order-process">
                  <div className="d-flex align-items-center gap-2">
                    <div className="d-flex flex-column gap-2">
                      <div className="checkbox">
                        <BsCheck />
                      </div>
                    </div>
                    <div className="buyer-img d-flex align-items-center justify-content-center">
                      <FaUser />
                    </div>
                    <div className="d-flex flex-column">
                      <small>Order Place by Buyer</small>
                      <small>14 November</small>
                    </div>
                  </div>
                  <small>2:55 PM</small>
                </div>

                {showData && (
                  <>
                    <div className="vr"></div>

                    <div className="d-flex align-items-center justify-content-between order-process">
                      <div className="d-flex align-items-center gap-2">
                        <div className="checkbox">
                          <BsCheck />
                        </div>
                        <div className="buyer-img d-flex align-items-center justify-content-center">
                          <BsShop />
                        </div>
                        <div className="d-flex flex-column">
                          <p>Order Accepted</p>
                          <small>14 November</small>
                        </div>
                      </div>
                      <small>2:56 PM</small>
                    </div>
                  </>
                )}

                {showDispatch && (
                  <>
                    <div className="vr"></div>

                    <div className="d-flex align-items-center justify-content-between order-process">
                      <div className="d-flex align-items-center gap-2">
                        <div className="checkbox">
                          <BsCheck />
                        </div>
                        <div className="buyer-img d-flex align-items-center justify-content-center">
                          <BsShop />
                        </div>
                        <div className="d-flex flex-column">
                          <p>Order Dispatched</p>
                          <small>14 November</small>
                        </div>
                      </div>
                      <small>3:56 PM</small>
                    </div>
                  </>
                )}
              </div>

              {!showData && (
                <div className="d-flex gap-2 mt-3">
                  <button className="btn-1">Cancel Order</button>
                  <button
                    className="btn-2"
                    onClick={() => setShowData(!showData)}
                  >
                    Accept Order
                  </button>
                </div>
              )}

              {showData && !showDispatch && (
                <button
                  className="btn-2"
                  onClick={() => setShowDispatch(!showDispatch)}
                >
                  Order Dispatched
                </button>
              )}

              {showDispatch && (
                <button className="btn-2" onClick={toggle}>
                  Check Review
                </button>
              )}

              <div>
                <Modal
                  isOpen={modal}
                  toggle={toggle}
                  {...args}
                  size="lg"
                  centered={true}
                >
                  <ModalBody className="p-3 bg-normal-black">
                    <div className="d-flex flex-column justify-content-center gap-4 modalbox">
                      <div className="d-flex flex-column align-items-center gap-2 md-box position-relative">
                        <p className="mb-0">Average Rating</p>
                        <p className="mb-0">4.0</p>
                        <img src={bigstars} />
                        <small>Given Star</small>
                        <div
                          className="position-absolute cross-btn"
                          onClick={toggle}
                        >
                          <RxCross2 className="text-white" />
                        </div>
                      </div>
                      <div className="br-1 p-3 d-flex align-items-center gap-3">
                        <div className="d-flex flex-column align-items-center text-center gap-2">
                          <img src={muser} style={{ width: "76px" }} />
                          <small style={{ fontSize: "12px" }}>
                            Mich Jorden
                          </small>
                          <small style={{ color: "#909090", fontSize: "12px" }}>
                            19 sep, 2024
                          </small>
                        </div>
                        <div className="d-flex flex-column gap-2 md-small">
                          <img src={smallstars} />
                          <small>
                            I recently invested in a new keyboard, and I must
                            say, it has truly transformed my computing
                            experience.
                          </small>
                        </div>
                      </div>
                    </div>
                  </ModalBody>
                </Modal>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderDetail;
