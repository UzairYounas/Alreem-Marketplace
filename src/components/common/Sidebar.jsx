import React, { useState } from "react";
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
  const [activeLink, setActiveLink] = useState('');

  return (
    <div className="d-flex flex-column justify-content-center gap-5 py-3 sidebar">
      <Link to='/'>
        <img src={logo} />
      </Link>

      <div className="d-flex flex-column gap-4 mt-3 icons">

        <NavLink to='/' className="d-flex align-items-center gap-2 text-decoration-none p-2" onClick={() => setActiveLink('home')}>
          <img src={activeLink === 'home' ? homeactive : home} />
          <p className="mb-0">Home Page</p>
        </NavLink>

        <NavLink to='/dashboard' className="d-flex align-items-center gap-2 text-decoration-none p-2" onClick={() => setActiveLink('dashboard')}>
          <img src={activeLink === 'dashboard' ? dashboardactive : dashboard } />
          <p className="mb-0">Dashboard</p>
        </NavLink>

        <NavLink to='/manageorder' className="d-flex align-items-center gap-2 text-decoration-none p-2" onClick={() => setActiveLink('order')}>
          <img src={activeLink === 'order' ? orderactive : order} />
          <p className="mb-0">Manage order</p>
        </NavLink>

        <NavLink to='/disputeorder' className="d-flex align-items-center gap-2 text-decoration-none p-2" onClick={() => setActiveLink('dispute')}>
          <img src={activeLink === 'dispute' ? disputeactive : dispute} />
          <p className="mb-0">Dispute order</p>
        </NavLink>

        <NavLink to='/inventory' className="d-flex align-items-center gap-2 text-decoration-none p-2" onClick={() => setActiveLink('inventory')}>
          <img src={activeLink === 'inventory' ? inventoryactive : inventory} />
          <p className="mb-0">Inventory</p>
        </NavLink>

        <NavLink to='/draftinventory' className="d-flex align-items-center gap-2 text-decoration-none p-2" onClick={() => setActiveLink('draft')}>
          <img src={activeLink === 'draft' ? draftactive : draft} />
          <p className="mb-0">Draft inventory</p>
        </NavLink>

        <Link className="d-flex align-items-center gap-2 text-decoration-none p-2" onClick={() => setActiveLink('inbox')}>
          <img src={activeLink === 'inbox' ? inboxactive : inbox} />
          <p className="mb-0">Inbox</p>
        </Link>

        <Link className="d-flex align-items-center gap-2 text-decoration-none p-2" onClick={() => setActiveLink('edit')}>
          <img src={activeLink === 'edit' ? editactive : edit} />
          <p className="mb-0">Edit Shop</p>
        </Link>

      </div>
    </div>
  );
}

export default Sidebar;
