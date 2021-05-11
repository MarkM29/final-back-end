import React from "react";
import { Button } from "../../atoms";
import { Footer } from "../../molecules";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <h1 className="text-center mt-5">Welcome to KiosNote</h1>
      <h3 className="text-center">Catat Pemasukkan Kios/Kedai Anda di sini</h3>
      <div
        style={{ marginLeft: "400px", marginRight: "400px", marginTop: "20px" }}
      >
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button text="Mulai" color="brown" textColor="white" />
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Start;
