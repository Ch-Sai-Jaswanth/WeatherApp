import React, { useState, useEffect } from "react";
import { GITHUB_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const About = () => {

    const [user, setUser] = useState("");

    useEffect(() => {
        fetchUser();
    });

    const fetchUser = async () => {
        try{
            const data = await fetch(GITHUB_URL);
            const json = await data.json();
            //console.log(json);
            setUser(json);
        }
        catch(error)
        {
            console.log(error);
        }
    }
    const { avatar_url, login } = user;
    return (
        <div className="bg-gradient-to-r from-blue-500 to-green-500 flex flex-col md:flex-row p-4 justify-center items-center min-h-screen">
            <div className="flex justify-center md:justify-start">
                <img src={avatar_url} alt="Github profile" className="w-32 h-32 md:w-60 md:h-60 rounded-full m-4" />
            </div>
            <div className="flex flex-col items-center md:items-start md:ml-8 text-center md:text-left md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
                <h1 className="font-sans text-4xl md:text-5xl text-black p-2 rounded-lg mb-2 font-bold">
                SAI JASWANTH CHAVATA
                </h1>
                <h1 className="font-sans text-2xl md:text-3xl p-2 rounded mb-1">
                Github profile: {login}
                </h1>
                <p className="text-lg max-w-md ml-4 md:ml-0 p-2">
                I am passionate about web development and constantly exploring new technologies to enhance my skills. Currently pursuing Under Graduation at Gayatri Vidya Parishad College of Engineering, Visakhapatnam. I have hands-on experience in frontend and backend development using technologies like React, Node.js, MongoDB, and Tailwind CSS.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none transition duration-300 mt-4">
                <Link to="/contact">Get in touch</Link>
                </button>
            </div>
        </div>
    )
}

export default About;