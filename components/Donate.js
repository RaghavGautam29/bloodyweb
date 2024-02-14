import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar'
import Footer from './Footer'
export default function Donate() {
  const [name,setName] =useState('');
  const [blood,setBlood] =useState('');
  const [date,setDate] = useState('');
  const [addr,setAddr] =useState('');
  const [gen,setGen] = useState('')
  const [cty,setCty] = useState('');
  const [state,setState]=useState('');
  const [zip,setZip]=useState('');
  const [contact,setContact]=useState('');
  const [email,setEmail]=useState('');
  const [aadhar,setAadhar]=useState('');
  const [issue,setIssue] = useState('');
  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/", {name,date,addr,gen,cty,state,zip,email,contact,aadhar,issue,blood});
      alert('Submit successful!');
    } catch (error) {
      console.log(error);
    }
  };
 const handleClick = ()=>{
   alert("success");
   window.location.href = '/';
 };
  return (
    <> 
    <Navbar/>
  <div className='another'>
  <form className="form" onSubmit={submit}>
    <p className="title" style={{marginTop:'50px'}}>Register </p>
        <div className="flex">
        <label>
            <input  placeholder="" type="text" onChange={(e)=>{setName(e.target.value);}} required className="input" style={{width:'300px'}}/>
            <span>FullName</span>
        </label>
        <label>
            <input required placeholder="" type="text" className="input" onChange={(e)=>{setEmail(e.target.value);}} style={{width:'300px'}}/>
            <span>Email</span>
        </label>
    </div>  
    <div className="flex">
    <label>
          <input className="input" type="date" name="dateOfBirth" onChange={(e)=>{setDate(e.target.value);}} style={{width:'200px'}} required='' />
        </label> 
        <label>
          <select name="blood" className="input" onChange={(e)=>{setBlood(e.target.value);}} style={{width:'200px'}}required>
            <option value="">Blood Type</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O-">O-</option>
          </select>
        </label>
        <label>
          <select name="gender" className="input" onChange={(e)=>{setGen(e.target.value);}} style={{width:'250px'}} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
    </div>
    <div className="flex">
    <label>
          <input type="text" className="input" name="address" onChange={(e)=>{setAddr(e.target.value);}} style={{width:'250px'}} required />
        <span>Address</span>
        </label>
        <label>
          <input type="text" name="city" className="input" onChange={(e)=>{setCty(e.target.value);}} style={{width:'250px'}} required />
        <span>City</span>
        </label>
        <label>
          <input type="text" name="state" className="input" onChange={(e)=>{setState(e.target.value);}} style={{width:'250px'}} required />
        <span>State</span>
        </label>
        <label>
          <input type="text" name="zipCode" className="input" onChange={(e)=>{setZip(e.target.value);}} style={{width:'250px'}} required />
        <span>Zip Code</span>
        </label>
    </div>
        <div className="flex">
        <label>
          <input type="tel" name="contactNumber" className="input" style={{width:'250px'}} onChange={(e)=>{setContact(e.target.value);}} required />
        <span>Phone No.</span>
        </label>
        <label>
          <input type="text" className="input" name="aadharCardNumber" style={{width:'250px'}} onChange={(e)=>{setAadhar(e.target.value);}} required />
        <span>Aadhar No.</span>
        </label>
        </div>
        <label>
          <textarea name="healthIssues" className="input" onChange={(e)=>{setIssue(e.target.value);}}  style={{width:'1000px',marginLeft:'100px'}} required />
       <span style={{marginLeft:'100px'}}>Any Health Issue</span>
        </label>    
    <button style={{marginLeft:'100px',marginBottom:'60px'}}type="submit" value="Submit" onClick={handleClick} onSubmit={submit}className="submit">Submit</button>
</form>
  </div>
  <Footer/>
  </>
   
  );
  }
