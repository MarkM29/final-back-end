import React, { useState, useEffect } from "react";
import { Footer, NavBar } from "../../molecules";
import { Button } from "../../atoms";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div style={{ backgroundColor: "bisque", height: "100vh" }}>
      <NavBar />
      <div className="container">
        <h3 className="mt-3">
          KiosNote adalah Aplikasi Website yang dapat digunakan untuk
          mempermudah pencatatan pemasukkan Kios/Tempat Makan Kecil dengan
          tampilan sederhana dan mudah digunakan
        </h3>
        <br />

        <p>Mark Mononutu</p>
        <p>Back-End Web Developement - B</p>
      </div>
      <div
        style={{
          marginTop: "250px",
          marginLeft: "400px",
          marginRight: "400px",
        }}
      >
        <Link to="login" style={{ textDecoration: "none" }}>
          <Button text="Logout" color="red" textColor="white" />
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default About;
