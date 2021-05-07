import React from "react";
import { NavBar } from "../../../components";
import { Input } from "../../atoms";

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: "bisque", height: "100vh" }}>
      <NavBar />
      <div className="container">
        <h3 className="text-center mb-5">DASHBOARD</h3>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <Input
              label="Text1"
              placeholder="placeholder"
              className="form-control"
            />
            <Input
              label="Text2"
              placeholder="placeholder"
              className="form-control"
            />
          </div>
          <div className="col-sm ms-5">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Column1</th>
                  <th>Column2</th>
                  <th>Column3</th>
                  <th>Column4</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
