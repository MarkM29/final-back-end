import React, { useState } from "react";
import { Button, Input } from "../../atoms";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className="border mt-5 p-5"
      style={{ marginLeft: 500, marginRight: 500 }}
    >
      <h1 className="text-center">Log In</h1>
      <hr />
      <div className="mt-5">
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
        />
        <br />
        <Button block text="Sign In" textColor="white" />
        <Button block text="Sign Up" color="grey" textColor="white" />
      </div>
    </div>
  );
};

export default Login;
