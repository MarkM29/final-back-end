import React, { useState, useEffect } from "react";
import { NavBar } from "../../../components";
import { Button, Input } from "../../atoms";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../../App.css";
import firebase from "../../../config/Firebase";

const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [kategori, setKategori] = useState("");
  const [produk, setProduk] = useState("");
  const [harga, setHarga] = useState(0);
  const [catatan, setCatatan] = useState([]);
  const [total, setTotal] = useState(0);

  const date = startDate.toDateString();

  console.log("test", catatan[1]);

  

  useEffect(() => {

    firebase
      .database()
      .ref(`catatan/${date}`)
      .on("value", (res) => {
        if (res.val()) {
          //ubah menjadi array object
          const rawData = res.val();
          const catatanArray = [];
          Object.keys(rawData).map((item) => {
            catatanArray.push({
              id: item,
              ...rawData[item],
            });
          });
          setCatatan(catatanArray);
          console.log(catatanArray);
          let count = 0;
          for (let i = 0; i < catatanArray.length; i++) {
            count = +count + +catatanArray[i].harga;
            setTotal(count);
          }
          console.log(total);
          
        } else {
          setTotal(0);
          setCatatan([]);
        }
      });
  }, [total, date]);

  const handleSubmit = () => {
    const tanggal = startDate.toLocaleDateString("ID");
    const data = {
      date: tanggal,
      kategori: kategori,
      produk: produk,
      harga: harga,
    };
    const date = startDate.toDateString();
    firebase.database().ref(`catatan/${date}`).push(data);
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
              dateFormat="dd/MM/yyyy"
            />
            <Input
              label="Kategori"
              placeholder="Makanan/Minuman"
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
              {catatan && (
                <tbody>
                  {catatan.map((item) => (
                    <tr>
                      <td>{item.date}</td>
                      <td>{item.kategori}</td>
                      <td>{item.produk}</td>
                      <td>{item.harga}</td>
                    </tr>
                  ))}
                </tbody>
              )}   
            </table>
            <br />
            <h1>
              Total for {date} : Rp. {total}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
