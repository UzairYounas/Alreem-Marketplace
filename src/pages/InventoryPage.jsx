import React from 'react'

import Sidebar from '../components/common/Sidebar'
import NavInventory from '../components/common/NavInventory'
import Inventory from '../components/Inventory/Inventory'

function InventoryPage() {
  return (
    <div className="container-fluid bg-normal-black">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <NavInventory />
          <Inventory />
        </div>
      </div>
    </div>
  )
}

export default InventoryPage;
