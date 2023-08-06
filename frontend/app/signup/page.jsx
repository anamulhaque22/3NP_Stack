'use client'
import axios from "axios";
import { useState } from "react";

const SignUp = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [userName,setUserName] = useState('');
  const [phone,setPhone] = useState('');
  const [address,setAddress] = useState('');
  const [password,setPassword] = useState('');
  const [dob,setDob] = useState('');
  const [gender, setGender] = useState("Male")
  const [file, setFile] = useState(null);

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(file)
    const eventOrganizer = {
      Name: name,
      Email: email,
      Username: userName,
      Password: password,
      DOB:dob,
      Phonenumber: "+"+phone,
      Address: address,
      Photo: file
    }
    console.log(eventOrganizer)

    try {
      const result = await axios.post('http://localhost:4000/admin/addEventOrganizer', eventOrganizer)
      console.log(result)
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div>
      <h1>Sign Up</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={e => setName(e.target.value)}/><br />
        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/><br />
        <input type="text" placeholder="Username" onChange={e => setUserName(e.target.value)}/><br />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/><br />
        <input type="number" placeholder="Phone Number"onChange={e => setPhone(e.target.value)}/><br />
        <input type="text" placeholder="Address"onChange={e => setAddress(e.target.value)}/><br />
        <input type="file" name="" id="" onChange={e => setFile(e.target.files[0])}/><br />
        <input type="date" onChange={e => setDob(e.target.value)}/><br />
          Gender
        <input type="radio" name="gender" value="Male" checked={gender === 'Male'} onChange={e => setGender(e.target.value)}/> Male
        <input type="radio" name="gender" value="Female" checked={gender === 'Female'} onChange={e => setGender(e.target.value)}/> Female
        <input type="radio" name="gender" value="Other" checked={gender === 'Other'} onChange={e => setGender(e.target.value)}/> Other
        <br /><input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SignUp;
