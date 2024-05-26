import React, { useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
const InforBtn = () => {
  const [showGmailPopup, setShowGmailPopup] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);

  const toggleGmailPopup = () => {
    setShowGmailPopup(!showGmailPopup);
    setShowContactPopup(false); // Close the contact popup if it's open
  };

  const toggleContactPopup = () => {
    setShowContactPopup(!showContactPopup);
    setShowGmailPopup(false); // Close the Gmail popup if it's open
  };

  return (
    <div>
      <div className="fixed bottom-4 right-4 flex items-center space-x-4">
        <button
          onClick={toggleGmailPopup}
          className="bg-gray-400 text-gray-600 p-3 rounded-full shadow-lg focus:outline-none"
        >
          <FaEnvelope size={18} />
        </button>
        <button
          onClick={toggleContactPopup}
          className="bg-gray-400 text-gray-600 p-3 rounded-full shadow-lg focus:outline-none"
        >
          <FaPhone size={18} />
        </button>
      </div>

      {showGmailPopup && (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-xl shadow-lg">
          <div className="text-lg">Gmail Address</div>
          <hr className="w-full border-t-2 border-gray-300" />

          <div className="text-gray-900">riteshkumar555sah@gmail.com</div>
        </div>
      )}

      {showContactPopup && (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-xl shadow-lg">
          <div className="text-lg">Contact Number</div>
          <hr className="w-full border-t-2 border-gray-300" />

          <div className="text-gray-900">+91-9267988110</div>
        </div>
      )}
    </div>
  );
};

export default InforBtn;
