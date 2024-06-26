import React from 'react'

import Sidebar from '../components/common/Sidebar'
import InventoryDetail from '../components/Inventory/InventoryDetail'
import Navbar from '../components/common/Navbar'

function InventoryDetailPage() {


  return (
    <div className="container-fluid bg-normal-black">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <Navbar />
          <InventoryDetail />
        </div>
      </div>
    </div>
  )
}

export default InventoryDetailPage;
