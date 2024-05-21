import React from 'react'
import { Link } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoCard } from "react-icons/io5";
import { TbBus } from "react-icons/tb";
import { BsCheck } from "react-icons/bs";
import { BsShop } from "react-icons/bs";

import product1 from "../../assets/images/product1.png";
import product2 from "../../assets/images/product2.png";
import product3 from "../../assets/images/product3.png";

function OrderCancel() {

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


  return (
    <>
      <Link to="/manageorder" className="text-white text-decoration-none mb-2">
        <FaArrowLeft /> Order Details
      </Link>
      <div className="p-3 mt-2" style={{ backgroundColor: "#29292A" }}>
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
                      <p>Cancelled Order</p>
                      <small>14 November</small>
                    </div>
                  </div>
                  <small>2:56 PM</small>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderCancel
