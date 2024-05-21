import React from "react";
import { Link } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa6";
import { HiMiniInformationCircle } from "react-icons/hi2";
import logo from "../../assets/images/logo.png";

function Chat() {
  return (
    <div>
      <Link to="/disputeorder" className="text-white text-decoration-none mb-2">
        <FaArrowLeft /> Chat Support
      </Link>
      <div className="p-3 mt-3" style={{ backgroundColor: "#29292A" }}>
        <div className="br-1">
          <div className="d-flex flex-column align-items-center justify-content-center text-center chatbot gap-4">
            <div className="bg-logo d-flex align-items-center justify-content-center">
              <img src={logo} />
            </div>
            <p className="mb-0">
              Welcome to Alreem Chat Support. Seller and buyer are requested to
              resolve there dispute via chat support. In case of no solution
              contact admin in the chat.
            </p>
            <div className="d-flex align-items-center justify-content-center gap-2 chat-info">
              <HiMiniInformationCircle />
              <small>seller has opened a disputes</small>
            </div>
            <hr className="hr-2" />
            
          </div>
        </div>
      </div>

    </div>
  );
}

export default Chat;
