import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar'
import Footer from './Footer'

export default function Search() {
  const [blood, setBlood] = useState('');
  const [city, setCity] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
const formattedBloodType = blood ? blood.replace(/\+/g, "%2B") : '';
const response = await axios.get(`http://localhost:8000/search?blood=${formattedBloodType}&city=${city}`);
      console.log('Response from server:', response.data);
      setUserData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <div style={{backgroundColor:'#FFFAD7'}}>
      <Navbar/>
      <div className='donor' style={{backgroundColor:'#FFFAD7'}}>
      <p className="title" style={{marginTop:'50px'}}>Blood Donor Availability</p>
      <div className='flex'>
      <form className='form' onSubmit={handleSubmit}>
        <div className='conatiner'>
          <div className='row'>
            <div className='col-md-6'>
         <label>
        <select name="blood" value={blood} className="input" onChange={(e)=>setBlood(e.target.value)} style={{width:'450px'}}required>
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
            </div>  
        <div className='col-md-6'>
        <label>
        <input
          type="text" className='input'
          placeholder="Enter City"
          value={city} style={{width:'450px',marginLeft:'400px'}}
          onChange={(e) => setCity(e.target.value)}
          required
        /></label>
        </div>
          </div>
        </div>
       
        <button className='submit' style={{marginBottom:'50px'}} type="submit">Search</button>
      </form>
      </div>
      <div className='result'>
      {userData && (
        <div style={{marginBottom:'20px'}}>
          <h2 className='title'>User Details:</h2>
          <div className='rsult-detail' style={{marginLeft:'100px',paddingBottom:'70px',paddingTop:'20px'}}>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Address: {userData.addr}</p>
          <p>Conatct: {userData.contact}</p>
          {/* Add more fields as needed */}
          </div>
        </div>
      )}
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
}
