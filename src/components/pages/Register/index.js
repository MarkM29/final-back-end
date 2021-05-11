import React, { useState } from "react";
import { Button, Input } from "../../../components";
import { Link, useHistory } from "react-router-dom";
import firebase from "../../../config/Firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  let history = useHistory();
  const handleSubmit = () => {
    const data = {
      email: email,
      fullName: fullName,
    };

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        //simpan ke database
        const userId = userCredential.user.uid;
        firebase
          .database()
          .ref("users/" + userId)
          .set(data);

        setFullName("");
        setEmail("");
        setPassword("");

        history.push("/login");
      })
      .catch((error) => {
        console.log(error);
        //tampilkan pesan error
      });
  };
  return (
    <div
      className="border mt-5 p-5"
      style={{ marginLeft: 500, marginRight: 500 }}
    >
      <h1 className="text-center">Register</h1>
      <hr />
      <div className="mt-5">
        <Input
          className="form-control"
          label="Nama Lengkap"
          placeholder="Masukkan nama lengkap"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        />
        <Input
          className="form-control"
          label="Email"
          placeholder="Masukkan email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          className="form-control"
          label="Password"
          placeholder="Masukkan password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
        />
        <br />
        <Button
          block
          text="Register"
          textColor="white"
          color="brown"
          onSubmit={handleSubmit}
        />
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button block text="Back to Login" color="grey" textColor="white" />
        </Link>
      </div>
    </div>
  );
};

export default Register;
