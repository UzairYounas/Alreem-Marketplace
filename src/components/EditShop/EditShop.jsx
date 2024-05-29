import React, { useState } from "react";
import { Link } from "react-router-dom";

import { RxCross2 } from "react-icons/rx";
import shopimg from '../../assets/images/shop-img.jpg'

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

function EditShop({ direction, ...args }) {
  const [value, setValue] = useState();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const toggle2 = () => setDropdownOpen2((prevState) => !prevState);

  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");

  const handleSelect = (option) => {
    setSelectedOption(option);
  };
  const handleSelect2 = (option) => {
    setSelectedOption2(option);
  };

  return (
    <div className="height-break p-3" style={{ backgroundColor: "#29292A" }}>
      <div className="br-1 p-4 bg-normal-black editing text-white">

        <div className="position-relative">
            <img src={shopimg} alt="shop"/>
            <RxCross2 className="del-img" />
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="d-flex flex-column gap-4">
              <div className="d-flex flex-column gap-2">
                <label>Shop Name</label>
                <input type="text" placeholder="Grade Lab" />
              </div>
              <div className="d-flex flex-column gap-2">
                <label>Shop Category</label>

                <Dropdown
                  isOpen={dropdownOpen}
                  toggle={toggle}
                  className="br-1 p-2"
                  style={{ backgroundColor: "#2c2c2c" }}
                >
                  <DropdownToggle caret className="drop-btn">
                    {selectedOption || "Select"}
                  </DropdownToggle>
                  <DropdownMenu>
                    {[
                      "indoor outdoor",
                      "Entertainment",
                      "Sports",
                      "Homemade",
                      "Children",
                    ].map((num) => (
                      <React.Fragment key={num}>
                        <DropdownItem
                          divider
                          style={{ backgroundColor: "#3D4348" }}
                        />
                        <DropdownItem
                          onClick={() => handleSelect(num.toString())}
                        >
                          {num}
                        </DropdownItem>
                      </React.Fragment>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="d-flex flex-column gap-2">
                <label>Phone Number</label>
                <PhoneInput
                  international
                  className={"rounded ps-2"}
                  defaultCountry="US"
                  onChange={setValue}
                />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="d-flex flex-column gap-4">
              <div className="d-flex flex-column gap-2">
                <label>Shop TagLine (Optional)</label>
                <input
                  type="text"
                  placeholder="headphones or audio equipments, possibly offering uni..."
                />
              </div>
              <div className="d-flex flex-column gap-2">
                <label>Website URL (Optional)</label>
                <input type="text" placeholder="gradolabs@gmail.com" />
              </div>
              <div className="d-flex flex-column gap-2">
                <label>City</label>
                
                <Dropdown
                  isOpen={dropdownOpen2}
                  toggle={toggle2}
                  className="br-1 p-2"
                  style={{ backgroundColor: "#2c2c2c" }}
                >
                  <DropdownToggle caret className="drop-btn">
                    {selectedOption2 || "Ajman"}
                  </DropdownToggle>
                  <DropdownMenu>
                    {[
                      "Ajamn",
                      "Dubai",
                      "Abu Dhabi",
                      "Gujairah",
                      "Khaimah",
                    ].map((num) => (
                      <React.Fragment key={num}>
                        <DropdownItem
                          divider
                          style={{ backgroundColor: "#3D4348" }}
                        />
                        <DropdownItem
                          onClick={() => handleSelect2(num.toString())}
                        >
                          {num}
                        </DropdownItem>
                      </React.Fragment>
                    ))}
                  </DropdownMenu>
                </Dropdown>

              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="d-flex flex-column gap-2 mt-4">
              <label>Write Description</label>
              <textarea placeholder="write the description about your shop..."></textarea>
            </div>
            <div className="d-flex align-items-center gap-3 mt-3">
              <input type="checkbox" style={{accentColor: '#EEE692', width: '18px', height: '18px'}} />
              <p className="mb-0">
                By Continuing you agree to our <Link style={{color: '#EEE692'}}>TERMS & CONDITION </Link>
                regarding the <br />
                Seller account.
              </p>
            </div>
            <button className="btn-2 mt-3">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditShop;
