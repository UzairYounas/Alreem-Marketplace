import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

import logo from "../../assets/images/logo.png";
import home from "../../assets/images/home.png";
import homeactive from "../../assets/images/homeactive.png";
import dashboard from "../../assets/images/dashboard.png";
import dashboardactive from "../../assets/images/dashboardactive.png";
import order from "../../assets/images/order.png";
import orderactive from "../../assets/images/orderactive.png";
import dispute from "../../assets/images/dispute.png";
import disputeactive from "../../assets/images/disputeactive.png";
import inventory from "../../assets/images/inventory.png";
import inventoryactive from "../../assets/images/inventoryactive.png";
import draft from "../../assets/images/draft.png";
import draftactive from "../../assets/images/draftactive.png";
import inbox from "../../assets/images/inbox.png";
import inboxactive from "../../assets/images/inboxactive.png";
import edit from "../../assets/images/edit.png";
import editactive from "../../assets/images/editactive.png";

const navItems = [
  { to: "/", img: home, imgActive: homeactive, label: "Home Page" },
  {
    to: "/dashboard",
    img: dashboard,
    imgActive: dashboardactive,
    label: "Dashboard",
  },
  {
    to: "/manageorder",
    img: order,
    imgActive: orderactive,
    label: "Manage order",
  },
  {
    to: "/disputeorder",
    img: dispute,
    imgActive: disputeactive,
    label: "Dispute order",
  },
  {
    to: "/inventory",
    img: inventory,
    imgActive: inventoryactive,
    label: "Inventory",
  },
  {
    to: "/draftinventory",
    img: draft,
    imgActive: draftactive,
    label: "Draft inventory",
  },
  { to: "/inbox", img: inbox, imgActive: inboxactive, label: "Inbox" },
  { to: "/editshop", img: edit, imgActive: editactive, label: "Edit Shop" },
];

function Sidebar() {
  const [status, setStatus] = useState(false);

  return (
    <>
      {/* {status ? (
        <div
          className="side-nav"
          style={{ backgroundColor: "#212121", zIndex: "10" }}
        >
          <div className="d-flex align-items-center justify-content-between">
            <Link to="/">
              <img src={logo} style={{ width: "150px" }} />
            </Link>

            <IoClose />
          </div>

          <div className="d-flex flex-column gap-4 mt-3 icons">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                className="d-flex align-items-center gap-2 text-decoration-none p-2"
              >
                {({ isActive }) => (
                  <>
                    <img
                      src={isActive ? item.imgActive : item.img}
                      alt={item.label}
                    />
                    <p className="mb-0">{item.label}</p>
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null} */}

      {status ? (
        <div className="side-nav p-3">
          <div className="d-flex align-items-center justify-content-between">
            <Link to="/">
              <img src={logo} style={{ width: "100px" }} />
            </Link>
            <IoClose className="close-bar" onClick={() => setStatus(false)} />
          </div>
          <div className="d-flex flex-column gap-3 side-icons mt-3">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                className="d-flex align-items-center gap-2 text-decoration-none p-2"
              >
                {({ isActive }) => (
                  <>
                    <img
                      src={isActive ? item.imgActive : item.img}
                      alt={item.label}
                    />
                    <p className="mb-0">{item.label}</p>
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}

      <FaBars className="d-lg-none d-md-none d-sm-flex d-flex text-white mt-3 h3" onClick={() => setStatus(true)} />
      <div className="d-lg-flex d-md-flex d-sm-none d-none flex-column justify-content-center gap-5 py-3 sidebar">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>

        <div className="d-flex flex-column gap-4 mt-3 icons">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className="d-flex align-items-center gap-2 text-decoration-none p-2"
            >
              {({ isActive }) => (
                <>
                  <img
                    src={isActive ? item.imgActive : item.img}
                    alt={item.label}
                  />
                  <p className="mb-0">{item.label}</p>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
