import React, { useState } from "react";

import { BsThreeDotsVertical } from "react-icons/bs";
import userimg from "../../assets/images/user-img.png";

function Navbar({ showDotsIcon, toggleModal}) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="bg-normal-black w-100 nav-bar">
      <div className="d-flex align-items-center justify-content-between">
        <h3 className="tit4">Aleem Seller Dashboard</h3>


        <div className="d-flex align-items-center gap-3">
          <div className="d-flex align-items-center gap-3" onClick={() => setIsVisible(!isVisible)} style={{ cursor: 'pointer' }}>
            <img src={userimg} />

            <div className="d-flex flex-column">
              <p className="tit2 mb-0">Michael Jorden</p>
              <p className="tit2 mb-0">Seller</p>
            </div>
          </div>
          {showDotsIcon && <BsThreeDotsVertical className="text-white" style={{cursor: 'pointer'}} onClick={toggleModal} />}
        </div>

        {isVisible && (
        <div className="bg-black text-danger">
          <p className="mb-0">Sign out</p>
        </div>
      )}

      </div>
    </div>
  );
}

export default Navbar;
