"use client";
import axios from "axios";
import { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(file);
    const adminInfo = {
      name,
      email,
      password,
      dob,
      phone,
      address,
      avatar: file,
    };

    try {
      const result = await axios.post(
        "http://localhost:4000/admin/register",
        adminInfo
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="Phone Number"
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        <input
          type="file"
          name=""
          id=""
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <input type="date" onChange={(e) => setDob(e.target.value)} />

        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SignUp;
