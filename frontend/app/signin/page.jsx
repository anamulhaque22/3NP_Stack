"use client"
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  return (
    <div>
      <h1>Sign In</h1>
      <div className="sign-in-from">
        <form>
          <input type="email" name="email" id="" onChange={handleEmail} /><br />
          <input type="password" name="password" id="" onChange={handlePassword} /><br />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
