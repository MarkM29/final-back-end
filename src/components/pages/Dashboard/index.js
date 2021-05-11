import React, { useState, useEffect } from "react";
import { NavBar } from "../../../components";
import { Button, Input } from "../../atoms";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../../App.css";
import firebase from "../../../config/Firebase";
import { Footer } from "../../molecules";

const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [kategori, setKategori] = useState("");
  const [produk, setProduk] = useState("");
  const [harga, setHarga] = useState(0);
  const [catatan, setCatatan] = useState([]);
  const [total, setTotal] = useState(0);
  const [button, setButton] = useState("Simpan");
  const [indexProduk, setIndexProduk] = useState({});

  const date = startDate.toDateString();

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
          let count = 0;
          for (let i = 0; i < catatanArray.length; i++) {
            count = +count + +catatanArray[i].harga;
            setTotal(count);
          }
        } else {
          setTotal(0);
          setCatatan([]);
        }
      });
  }, [total, date]);

  console.log(total);

  const handleSubmit = () => {
    const tanggal = startDate.toLocaleDateString("ID");

    const data = {
      date: tanggal,
      kategori: kategori,
      produk: produk,
      harga: harga,
    };

    const date = startDate.toDateString();
    if (button === "Simpan") {
      firebase.database().ref(`catatan/${date}`).push(data);
    } else {
      firebase.database().ref(`catatan/${date}/${indexProduk.id}`).set(data);
    }

    console.log(data);
    console.log(total);

    resetField();
  };

  const resetField = () => {
    setStartDate(new Date());
    setKategori("");
    setHarga(0);
    setProduk("");
    setButton("Simpan");
  };

  const handleUpdate = (item) => {
    setKategori(item.kategori);
    setProduk(item.produk);
    setHarga(item.harga);
    setButton("Simpan Perubahan");
    setIndexProduk(item);
  };

  const handleDelete = (item) => {
    firebase.database().ref(`catatan/${date}/${item.id}`).remove();
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "bisque",
          height: "100vh",
          marginBottom: "4vh",
        }}
      >
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
                text={button}
                color="green"
                textColor="white"
                onSubmit={handleSubmit}
              />
              {button === "Simpan Perubahan" && (
                <Button
                  text="Batal Ubah"
                  color="yellow"
                  onSubmit={resetField}
                />
              )}
            </div>
            <div className="col-sm ms-5">
              <table class="table mb-0">
                <thead class="CustomColor whiteText">
                  <tr>
                    <th scope="col">Tanggal</th>
                    <th scope="col">Kategori</th>
                    <th scope="col">Nama makanan/minuman</th>
                    <th scope="col">Harga </th>
                    <th scope="col">Update </th>
                    <th scope="col">Delete </th>
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
                        <td className="row">
                          <Button
                            text="Ubah"
                            color="#F28F27"
                            textColor="white"
                            onSubmit={() => handleUpdate(item)}
                          />
                        </td>
                        <td>
                          <Button
                            text="Hapus"
                            color="red"
                            textColor="white"
                            onSubmit={() => handleDelete(item)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
              <br />
              <h2 className="mt-0">
                Total for {date} : Rp. {total}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
