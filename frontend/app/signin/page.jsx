"use client";
import { useRouter } from "next/router";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const adminLogin = {
      email,
      password,
    };

    try {
      const result = await axios.post(
        "http://localhost:4000/admin/login",
        adminLogin
      );
      if (result.status === 200) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Sign In</h1>
      <div className="sign-in-from">
        <form>
          <input type="email" name="email" id="" onChange={handleEmail} />
          <br />
          <input
            type="password"
            name="password"
            id=""
            onChange={handlePassword}
          />
          <br />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
