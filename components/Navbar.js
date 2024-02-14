import React from 'react' 
import { Link } from "react-router-dom";
import './App.css';
const Navbar = () =>{
    return (
        <>
  <nav className="navbar navbar-expand-lg p-3" style={{backgroundColor:'#E97777'}}>
  <Link className="navbar-brand p-4" style={{color:'white', fontSize:'35px'}} to='/'>Bloodyweb</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse " id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <Link className="nav-link"style={{color:'white',fontSize:'20px'}} to="/About">About</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link"style={{color:'white',fontSize:'20px'}} to='/Donate'>Donate Blood</Link>
      </li>
      <li className="nav-link active">
        <Link className="nav-item"style={{color:'white',fontSize:'20px'}} to='/Search'>Looking For Blood</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" style={{color:'white',fontSize:'20px'}} to="/Ques">Q&A</Link>
      </li>
    </ul>
  </div>
</nav>  
        </>
    )
}
export default Navbar