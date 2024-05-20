import React, { useState } from "react";

import userimg from "../../assets/images/user-img.png";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="bg-normal-black w-100 nav-bar">
      <div className="d-flex align-item-center justify-content-between px-2 py-3">
        <h3 className="tit4">Aleem Seller Dashboard</h3>

        <div className="d-flex align-item-center gap-3" onClick={() => setIsVisible(!isVisible)} style={{ cursor: 'pointer' }}>
          <img src={userimg} />

          <div className="d-flex flex-column">
            <h5 className="tit2">Michael Jorden</h5>
            <p className="tit2 mb-0">Seller</p>
          </div>
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
