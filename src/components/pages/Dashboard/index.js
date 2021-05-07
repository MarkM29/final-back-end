import React, { useState } from "react";
import { NavBar } from "../../../components";
import { Button, Input } from "../../atoms";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../../App.css";

const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [kategori, setKategori] = useState("");
  const [produk, setProduk] = useState("");
  const [harga, setHarga] = useState(0);
  const [button, setButton] = useState("Save");

  const handleSubmit = () => {
    const data = {
      date: startDate,
      kategori: kategori,
      produk: produk,
      harga: harga,
    };
    console.log(data);
    resetFrom();
  };

  const resetFrom = () => {
    setStartDate(new Date());
    setKategori("");
    setHarga(0);
    setProduk("");
  };

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
              placeholder="Makanan"
              className="form-control"
              value={kategori}
              onChange={(event) => setKategori(event.target.value)}
            />
            <Input
              label="Nama Makanan/Minuman"
              placeholder="Masukkan nama makanan/minuman"
              className="form-control"
              value={produk}
              onChange={(event) => setProduk(event.target.value)}
            />
            <Input
              label="Harga"
              className="form-control"
              value={harga}
              onChange={(event) => setHarga(event.target.value)}
            />
            <br />
            <Button
              text="Simpan"
              color="#F28F27"
              textColor="white"
              onSubmit={handleSubmit}
            />
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
            <Button text="Total" color="#F28F27" textColor="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
