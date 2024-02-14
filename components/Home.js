import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
 const Home = () =>{
    return(
        <>
         <Navbar className='pb-3'/>
         <div className=" initial row p-3" style={{backgroundColor:'#FFFAD7'}}>
            <div className=" para col-md-6 p-5">
                <h1 style={{fontFamily:'sans-serif'}}>Donate Blood Save Lives</h1>
                <br/>
                <p>Every donation is critical and you can make a lifesaving difference. Patients with trauma, undergoing surgery, or with conditions that require blood transfusions, such as sickle cell disease, need blood and blood products. You can help.</p>
            </div>
            <div className="col-md-6">
                <img src={require("../images/blood2.jpg")} width={600} height={400} alt='newimage'/>
            </div>
         </div>
         <section id="features" style={{backgroundColor:'#FFFAD7'}}>
           <div className="row">
            <div className="feature-box col-md-4">
            <i className="emoji p-4 fa-solid fa-heart fa-4x"></i>
            <h5>Health Benefits, Volunteer Opportunity</h5>
            </div>
            <div className="feature-box col-md-4">
            <i className="emoji p-4 fa-solid fa-user fa-4x"></i>
            <h5>Lifesaving Community Support</h5>
            </div>
            <div className="feature-box col-md-4">
            <i className="emoji p-4 fa-solid fa-truck-medical fa-4x"></i>
            <h5>Regular Supply, Safe Process</h5>
            </div>
           </div>
         </section>
         <section id="facts">
            <div className='container'>
                <h2>Did You Know ?</h2>
                <br/>
                <ul>
                    <li style={{ marginBottom: '10px' }}>India requires approximately 12 million units of blood annually, but only about 11 million units are collected, leading to a significant gap in supply and demand.</li>
                    <li style={{ marginBottom: '10px' }}>While major cities often have blood banks and donation drives, rural areas in India often face shortages due to lack of infrastructure and awareness.</li>
                    <li style={{ marginBottom: '10px' }}>O+ is the most common blood type in India, followed by B+ and A+.</li>
                    <li style={{ marginBottom: '10px' }}>Blood donation becomes particularly crucial during emergencies and natural disasters, highlighting the importance of maintaining an adequate blood supply.</li>
                    <li style={{ marginBottom: '10px' }}>Technology is increasingly being used to streamline blood donation processes, including online donor registration, appointment scheduling, and donor tracking systems.</li>
                    <li style={{ marginBottom: '10px' }}>Challenges in India's blood donation system include inadequate infrastructure, lack of awareness about the importance of blood donation, and cultural barriers that may deter potential donors.</li>
                </ul>
            </div>
         </section>
         <section id="types"style={{textAlign:'center', backgroundColor:'#FFFAD7'}}>
            <img src={require('../images/image.png')}  alt="imagehai"/>
         </section>
         <Footer/>
        </>
    )
}
export default Home