import React, { useState } from "react";
import { NavBar } from "../../../components";
import { Button, Input } from "../../atoms";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../../App.css";

const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div style={{ backgroundColor: "bisque", height: "100vh" }}>
      <NavBar />
      <div className="container">
        <h3 className="text-center mb-5">CATATAN PEMASUKAN</h3>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <p className="form-label mt-3">Tanggal</p>
            <DatePicker
              className="form-control"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            <Input
              label="Kategori"
              placeholder="Masukkan kategori"
              className="form-control"
            />
            <Input
              label="Nama Makanan/Minuman"
              placeholder="Masukkan nama makanan/minuman"
              className="form-control"
            />
            <Input
              label="Harga"
              placeholder="Masukkan harga"
              className="form-control"
            />
            <br />
            <Button text="Simpan" color="brown" textColor="white" />
          </div>
          <div className="col-sm ms-5">
            <table class="table">
              <thead class="CustomColor whiteText">
                <tr>
                  <th scope="col">Tanggal</th>
                  <th scope="col">Kategori</th>
                  <th scope="col">Nama makanan/minuman</th>
                  <th scope="col">Harga </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
