import React from "react";
import { HELLO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-green-500 flex flex-col md:flex-row p-8 md:p-16 min-h-screen items-center justify-center">
      <div className="mb-8 md:mb-0 md:mr-8">
        <img src={HELLO_URL} alt="Hello Everyone" className="w-full md:w-auto rounded-lg shadow-lg" />
      </div>
      <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
        <h1 className="pt-8 md:pt-0 pb-4 md:pb-8 text-4xl md:text-5xl font-bold text-gray-800">
          Contact Us
        </h1>
        <p className="text-lg mb-4 text-gray-600">
          We’re here to help and answer any questions you might have. We look forward to hearing from you!
        </p>
        <div className="flex items-center mb-4 text-gray-700">
          <FontAwesomeIcon icon={faPhone} className="mr-2 text-blue-500" />
          <span className="text-lg">+91 8555985155</span>
        </div>
        <div className="flex items-center mb-4 text-gray-700">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-red-500" />
          <span className="text-lg">Nandigama, Andhra Pradesh, India</span>
        </div>
        <div className="flex items-center mb-4 text-gray-700">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-green-500" />
          <Link className="text-blue-600 hover:underline" to="mailto:saijaswanthch2003@gmail.com">
            saijaswanthch2003@gmail.com
          </Link>
        </div>
      </div>
    </div>
    )
}

export default Contact;