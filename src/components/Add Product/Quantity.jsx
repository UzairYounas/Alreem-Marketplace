import React, { useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
function Quantity({modal}) {
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    
    const toggle1 = () => setDropdownOpen1((prevState) => !prevState);
  return (
    <>
      <Modal isOpen={modal} size="md" centered={true}>
        <ModalBody
          className="br-1 bg-normal-black text-white p-3"
          style={{ borderRadius: "15px", padding: "15px 0" }}
        >
          <div className="d-flex flex-column gap-2">
            <label
              htmlFor="category1"
              className="d-flex justify-content-between"
            >
              Choose Color
            </label>

            <Dropdown
              className="br-1 p-2"
              toggle={toggle1}
            >
              <DropdownToggle className="drop-btn">
                select
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  red
                </DropdownItem>
                <DropdownItem>
                  blue
                </DropdownItem>
                <DropdownItem>
                  golden
                </DropdownItem>
                <DropdownItem>
                  brown
                </DropdownItem>
                <DropdownItem >
                  green
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>

          <div className="d-flex flex-column gap-2 mt-3">
            <label
              htmlFor="category1"
              className="d-flex justify-content-between"
            >
              size (optional)
            </label>

            <Dropdown
              className="br-1 p-2"
              toggle={toggle1}
            >
              <DropdownToggle caret className="drop-btn">
                select
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem >
                  3
                </DropdownItem>
                <DropdownItem
                >
                  4
                </DropdownItem>
                <DropdownItem >
                  5
                </DropdownItem>
                <DropdownItem
                  
                >
                  6
                </DropdownItem>
                <DropdownItem
                
                >
                  7
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>

          <div className="d-flex flex-column gap-2 mt-3 product-add">
            <label htmlFor="">Quantity</label>
            <input type="text" placeholder="Add" />
          </div>

          <button className="btn-2 mt-3">
            save
          </button>

        </ModalBody>
      </Modal>
      
    </>
  );
}

export default Quantity;
