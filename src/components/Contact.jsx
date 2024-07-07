import React from "react";
import { HELLO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (
        <div className="bg-orange-200 flex flex-col md:flex-row p-8 md:p-16 min-h-screen">
            <div className="mb-8 md:mb-0 md:mr-8">
                <img src={HELLO_URL} alt="Hello Everyone" className="w-full md:w-auto" />
            </div>
            <div className="md:w-1/2">
                <h1 className="pt-8 md:pt-0 pb-4 md:pb-8 text-4xl md:text-5xl font-bold">Contact Us</h1>
                <p className="text-lg mb-4">We’re here to help and answer any questions you might have. We look forward to hearing from you!</p>
                <div className="flex items-center mb-4">
                    <FontAwesomeIcon icon={faPhone} className="mr-2" />
                    <span className="text-lg">+91 8555985155</span>
                </div>
                <div className="flex items-center mb-4">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                    <span className="text-lg">Nandigama, Andhra Pradesh, India</span>
                </div>
                <div className="flex items-center mb-4">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                    <Link className="text-blue-600" to="mailto:saijaswanthch2003@gmail.com">saijaswanthch2003@gmail.com</Link>
                </div>
            </div>
        </div>
    )
}

export default Contact;