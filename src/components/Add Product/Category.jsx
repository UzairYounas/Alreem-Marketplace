import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function Category({ setStep }) {
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [selectedCategory1, setSelectedCategory1] = useState("");
  const [selectedCategory2, setSelectedCategory2] = useState("");
  const [errors, setErrors] = useState({});

  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);
  const toggle2 = () => setDropdownOpen2((prevState) => !prevState);

  const handleCategorySelect1 = (category) => {
    setSelectedCategory1(category);
    setErrors({ ...errors, category1: "" });
  };

  const handleCategorySelect2 = (category) => {
    setSelectedCategory2(category);
    setErrors({ ...errors, category2: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!selectedCategory1) {
      newErrors.category1 = "Please select a category";
    }

    if (!selectedCategory2) {
      newErrors.category2 = "Please select a category";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log(selectedCategory1, selectedCategory2);
      setStep(3);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-12 text-white">
          <div className="d-flex flex-column gap-2">
            <label
              htmlFor="category1"
              className="d-flex justify-content-between"
            >
              Category 
              {errors.category1 && (
              <span className="text-danger">{errors.category1}</span>
            )}
            </label>
            <Dropdown
              className="br-1 p-2"
              isOpen={dropdownOpen1}
              toggle={toggle1}
            >
              <DropdownToggle caret className="drop-btn">
                {selectedCategory1 || "Select Category"}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => handleCategorySelect1("luxury")}>
                  Luxury
                </DropdownItem>
                <DropdownItem
                  onClick={() => handleCategorySelect1("home_items")}
                >
                  Home Items
                </DropdownItem>
                <DropdownItem onClick={() => handleCategorySelect1("mens")}>
                  Mens
                </DropdownItem>
                <DropdownItem
                  onClick={() => handleCategorySelect1("technology")}
                >
                  Technology
                </DropdownItem>
                <DropdownItem
                  onClick={() => handleCategorySelect1("lifestyle")}
                >
                  Lifestyle
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className="d-flex flex-column gap-2 mt-3">
            <label
              htmlFor="category2"
              className="d-flex justify-content-between"
            >
              Product Availability 
              {errors.category2 && (
              <span className="text-danger">{errors.category2}</span>
            )}
            </label>
            <Dropdown
              className="br-1 p-2"
              isOpen={dropdownOpen2}
              toggle={toggle2}
            >
              <DropdownToggle caret className="drop-btn">
                {selectedCategory2 || "Select Category"}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => handleCategorySelect2("1")}>
                  Luxury
                </DropdownItem>
                <DropdownItem onClick={() => handleCategorySelect2("2")}>
                  Home Items
                </DropdownItem>
                <DropdownItem onClick={() => handleCategorySelect2("3")}>
                  Mens
                </DropdownItem>
                <DropdownItem onClick={() => handleCategorySelect2("4")}>
                  Technology
                </DropdownItem>
                <DropdownItem onClick={() => handleCategorySelect2("5")}>
                  Lifestyle
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <button type="submit" className="btn-2 text-center mt-3">
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

export default Category;
