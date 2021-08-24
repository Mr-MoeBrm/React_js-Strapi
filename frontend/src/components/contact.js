import React ,{useState}from 'react';
import ContacUs from './contactus';
import JoinUs from './JoinUs';
const Contact =()=>{

    const [Contact,setContact]=useState(false);
    const [Join,setJoin]=useState(false);
    return(
        <>
        <div className={Contact===true||Join===true ?"exit": "container contact-con fix" } id="CONTACT">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <h2>Contact us</h2>
                        <p>We're eager to discuss your business needs, and answer any questions you may have. Press the button below and message us, we'll get back to you shortly.</p>
                        <p>contact@tech-expert.io</p>
                        <button className="btn btn-tech" onClick={()=>setContact(true)}>Write Us A Message</button>
                    </div>
                    <div className="col-12 col-md-4">
                        <h2>Join our team</h2>
                        <p>Do you have what it takes to help lead the biggest industrial transformation in modern history?
                            We're always looking for top talent to join our team.</p>
                        <button className="btn btn-tech" onClick={()=>setJoin(true)}>Submit Your Resume</button>
                    </div>
                    <div className="col-12 col-md-4">
                        <h2>Other Offers</h2>
                        <p>We're always looking for top talent to join our teams.</p>
                        <a href="/offers" target="_blank" className="btn btn-tech">View Offres</a>
                    </div>
                </div>
        </div>
        <div className={Contact===true ? "fix" : "exit"}>
        <ContacUs setContact={setContact}/>
        </div>
        <div className={Join===true ? "fix" : "exit"}>
        <JoinUs setJoin={setJoin}/>
        </div>
        </>
    )
}
export default Contact;