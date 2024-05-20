import React from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import home from "../../assets/images/home.png";
import homeactive from "../../assets/images/homeactive.png";

import dashboard from '../../assets/images/dashboard.png'
import dashboardactive from '../../assets/images/dashboardactive.png'

import order from '../../assets/images/order.png'
import orderactive from '../../assets/images/orderactive.png'

import dispute from '../../assets/images/dispute.png'
import disputeactive from '../../assets/images/disputeactive.png'

import inventory from '../../assets/images/inventory.png'
import inventoryactive from '../../assets/images/inventoryactive.png'

import draft from '../../assets/images/draft.png'
import draftactive from '../../assets/images/draftactive.png'

import inbox from '../../assets/images/inbox.png'
import inboxactive from '../../assets/images/inboxactive.png'

import edit from '../../assets/images/edit.png'
import editactive from '../../assets/images/editactive.png'

function Sidebar() {
  return (
    <div className="d-flex flex-column justify-content-center gap-5 py-3">
      <img src={logo} />

      <div className="d-flex flex-column gap-4 mt-3 icons">

        <Link to='/' className="d-flex align-items-center gap-2 text-decoration-none p-2 active" >
          <img src={home} />
          <p className="mb-0">Home Page</p>
        </Link>

        <Link to='/dashboard' className="d-flex align-items-center gap-2 text-decoration-none p-2">
          <img src={dashboard} />
          <p className="mb-0">Dashboard</p>
        </Link>

        <Link to='manageorder' className="d-flex align-items-center gap-2 text-decoration-none p-2">
          <img src={order} />
          <p className="mb-0">Manage order</p>
        </Link>

        <Link className="d-flex align-items-center gap-2 text-decoration-none p-2">
          <img src={dispute} />
          <p className="mb-0">Dispute order</p>
        </Link>

        <Link className="d-flex align-items-center gap-2 text-decoration-none p-2">
          <img src={inventory} />
          <p className="mb-0">Inventory</p>
        </Link>

        <Link className="d-flex align-items-center gap-2 text-decoration-none p-2">
          <img src={draft} />
          <p className="mb-0">Draft inventory</p>
        </Link>

        <Link className="d-flex align-items-center gap-2 text-decoration-none p-2">
          <img src={inbox} />
          <p className="mb-0">Inbox</p>
        </Link>

        <Link className="d-flex align-items-center gap-2 text-decoration-none p-2">
          <img src={edit} />
          <p className="mb-0">Edit Shop</p>
        </Link>

      </div>
    </div>
  );
}

export default Sidebar;
