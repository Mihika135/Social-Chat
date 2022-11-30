import React from "react";
import { Link } from "react-router-dom";
import bg from "./bg.jpg";
import "./Homepage.css";

const Home = () => {
  return (
    <body>
      <div className="head">
        <img className="fit" src={bg} alt="" />
        <p className="app-name">Social-Chat</p>
        <p className="tag1">Connect With Friends From All Over The World</p>
        <Link
          to="/signup"
          onClick={() => {
            window.location.href = "/signup";
          }}
        >
          <button className="btn1">Get Started</button>
        </Link>
        <Link
          to="/login"
          onClick={() => {
            window.location.href = "/login";
          }}
        >
          <button className="btn2">Login</button>
        </Link>
      </div>
    </body>
  );
};

export default Home;
