import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";

function NavInventory({ showVerticalDots = false, setModal }) {
    const url = sessionStorage.getItem('url')
     
  return (
    <div className="bg-normal-black w-100 nav-bar">
      <div className="d-flex align-items-center justify-content-between">
        <h3 className="tit4">Aleem Seller Dashboard</h3>

        <div className="d-flex align-items-center gap-3">
            {url !== window.location.href && (
                <div className="d-flex align-items-center gap-3">
                <div className="position-relative p-2 nav-add">
                  <input type="text" placeholder="search..." className="ps-4" />
                  <CiSearch className="text-white position-absolute h4" style={{ left: '6px', top: '11px' }} />
                </div>
  
                <div className="d-flex align-items-center px-3 py-2 gap-3 nav-add text-white" style={{ cursor: 'pointer' }}>
                  <p className="mb-0">Add Product</p>
                  <FaPlus />
                </div>
              </div>
            )}
            {showVerticalDots && <BsThreeDotsVertical className="text-white" style={{ cursor: 'pointer' }} onClick={()=> setModal(true)} />}
        </div>
      </div>
    </div>
  );
}

export default NavInventory;
