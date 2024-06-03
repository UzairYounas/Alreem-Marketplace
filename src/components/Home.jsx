import React from "react";

import shopimg from "../assets/images/shop-img.jpg";

function Home() {
  return (
    <div className="height-break p-3" style={{ backgroundColor: "#29292A" }}>
      <div className="d-flex flex-column gap-3 home">
        <div className="d-flex flex-column justify-content-center gap-3 br-1 bg">
          <div className="d-flex flex-lg-row flex-md-row flex-sm-column flex-column gap-2 p-3">
            <img src={shopimg} />

            <div className="d-flex flex-column gap-2">
              <h5>Grado labs</h5>
              <p className="mb-0 tit2">
                headphones or audio equipments, possibly offering unique <br />
                feature
              </p>
            </div>
          </div>
        </div>

        <div className="d-flex flex-lg-row flex-md-row flex-sm-column flex-column align-items-center gap-3">
          <div className="d-flex flex-column gap-2 p-3 br-1 bg w-100">
            <h5>Address</h5>
            <p className="mb-0 tit2">Ajman United AArab Emirates</p>
          </div>

          <div className="d-flex flex-column gap-2 p-3 br-1 bg w-100">
            <h5>Category</h5>
            <p className="mb-0 tit2">Indoor Outdoor</p>
          </div>
        </div>

        <div className="d-flex flex-lg-row flex-md-row flex-sm-column flex-column align-items-center gap-3">
          <div className="d-flex flex-column gap-2 p-3 br-1 bg w-100">
            <h5>Website</h5>
            <p className="mb-0 tit2">www.gradolabmail.com</p>
          </div>

          <div className="d-flex flex-column gap-2 p-3 br-1 bg w-100">
            <h5>Contact Number</h5>
            <p className="mb-0 tit2">+97 3123 8797123</p>
          </div>
        </div>

        <div className="d-flex align-items-center gap-3">
          <div className="d-flex flex-column gap-2 p-3 br-1 bg w-100">
            <h5>Shop Description</h5>
            <p className="mb-0 tit2">
              Grado Labs we believe fashion is a journey meant to be shared.
              Join our vibrant community of fashion aficionados, <br /> where
              inspiration knows no bounds.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
