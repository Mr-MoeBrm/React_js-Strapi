import React ,{useState,useEffect}from 'react';
import {ArrowLeft, ArrowUp} from 'react-bootstrap-icons';
import {Contact} from '../api/api';

const ContacUs =({setContact})=>{
    const [data,setData]=useState({Email:"",Subject:""});
    const [error,seterror]=useState();
    const clear = () => {
        setData({Email:"",Subject:""});
    };
    const SubmitData = async (e) => {
        e.preventDefault();
        Contact(data).then(res => {
            alert(res.data);
          })
          .catch(err => {
            alert(err.data);
          });
        clear();
    };
    return(
        <div className="other container" id="other">
            <form action="" className="row" onSubmit={SubmitData}>
                <div className="col-md-6 col-12 submit-offre">
                    <div className="row">
                        <h2>
                            <button className="btn" type="button" onClick={()=>setContact(false)}>{<ArrowUp size={24}/>}</button> 
                            Contact Us
                        </h2>
                        
                        <span className="contact-info ">Email:</span>
                        <input 
                            className="contact-input"
                            value={data.Email} 
                            type="email"
                            onChange={(e)=>setData({...data,Email:e.target.value})}
                            />
                        <span className="contact-info ">Subject:</span>
                        <textarea 
                            className="contact-input"
                            value={data.Subject}
                            onChange={(e)=>setData({...data,Subject:e.target.value})}
                            />
                        <button className="btn btn-tech w-100" type="submit">Send</button>
                    </div>
                </div>
            </form>       
        </div>
    )
}
export default ContacUs;