import React from 'react'

import Sidebar from '../components/common/Sidebar'
import Navbar from '../components/common/Navbar'
import DraftInventory from '../components/DraftInventory/DraftInventory'

function DraftInventoryPage() {
  return (
    <div className="container-fluid bg-normal-black">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <Navbar />
          <DraftInventory />
        </div>
      </div>
    </div>
  )
}

export default DraftInventoryPage
