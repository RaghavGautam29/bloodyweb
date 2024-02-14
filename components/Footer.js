import React from "react";
import { Link } from "react-router-dom";
export default function Footer(){
    return(
        <>
         <div className="last row" style={{textAlign:'center'}}>
            <div className="col-md-6" style={{textAlign:'left',padding:'60px'}}>
                <h5>Created By : <strong>Raghav Gautam</strong></h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor.</p>
                 <br/>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className="col-md-6" style={{textAlign:'center',paddingTop:'80px'}}>
                <h5><strong>Contact Us</strong></h5>
                <Link className="footer-items"><i className="cont fa-brands fa-twitter fa-2x p-3"></i></Link> 
                <Link className="footer-items"><i class="cont fa-brands fa-instagram fa-2x p-3"></i></Link>
                <Link className="footer-items"><i class="cont fa-solid fa-envelope fa-2x p-3"></i></Link>
            </div>
         </div>
        </>
    )
}