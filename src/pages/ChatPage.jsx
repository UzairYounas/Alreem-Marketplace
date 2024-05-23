import React, { useState } from "react";

import { Modal, ModalBody } from "reactstrap";

import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";
import Chat from "../components/Chat/Chat";

function ChatPage() {
  
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="container-fluid bg-normal-black">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <Navbar showDotsIcon={true} toggleModal={toggle} />
          <Chat />

          <Modal isOpen={modal} toggle={toggle} size="md" centered={true}>
            <ModalBody
              className="br-1 bg-normal-black"
              style={{ borderRadius: "15px", padding: "15px 0" }}
            >
              <div className="d-flex flex-column align-items-center justify-content-center text-center text-white">
                <p style={{ color: "#EEE692" }}>Invite Admin</p>
                <small>
                  Are you sure you want the admin to invite in this chat?
                </small>
                <hr className="hr-2 w-100" />
                <p className="mb-0" style={{cursor: 'pointer'}} onClick={toggle}>
                  Yes, invite
                </p>
                <hr className="hr-2 w-100" />
                <p className="text-danger mb-0" style={{cursor: 'pointer'}} onClick={toggle}>
                  Cancel
                </p>
              </div>
            </ModalBody>
          </Modal>

        </div>
      </div>
    </div>
  );
}

export default ChatPage;
