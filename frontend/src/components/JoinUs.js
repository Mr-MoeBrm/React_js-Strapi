import React , {useState} from 'react';
import {ArrowLeft, ArrowUp} from 'react-bootstrap-icons';
import {SubmitInMain} from '../api/api';
import {useParams} from 'react-router-dom';
const JoinUs =({setJoin})=>{
    const params=useParams();
    const [show,setShow]=useState(false);
    const [error,seterror]=useState();
    const [data,setData]=useState({offre:params.id,FirstName:"",LastName:"",Email:"",CV:""});
    const clear = () => {
        setData({FirstName:"",LastName:"",Email:"",CV:""});
        seterror("");
    }; 
    const SubmitData = async (e) => {
        e.preventDefault();
        if (data.FirstName== "") { 
            seterror("please Insert you FirstName")
        }
        else if (data.LastName== "") {
            seterror("please Insert you LastName")
        }
        else if (data.Email== "") {
            seterror("please Insert you Email")
        }
        else if (data.CV== "") {
            seterror("please Insert you CV")
        }
        else{
            SubmitInMain(data).then(res => {
                alert(res.data);
            })
            .catch(err => {
                alert(err.data);
            })
            clear()
            setJoin(false)
        }
    }
    return(
        <div className="other container" id="other">
            <form action="" className="row" onSubmit={SubmitData}>
                <div className="col-md-6 col-12 submit-offre">
                    <div className="row">
                        <h2>
                            <button className="btn" onClick={()=>setJoin(false)}>{<ArrowUp size={24}/>}</button> 
                            Join Us
                        </h2>
                        <span>{error}</span>
                        <div className="col-md-6 col-12 FirstName">
                        <span className="contact-info ">FirstName:</span>
                        <input 
                            className="contact-input w-100" 
                            type="text"
                            value={data.FirstName}
                            onChange={(e)=>setData({...data,FirstName:e.target.value})}/>
                        </div>
                        <div className="col-md-6 col-12 LastName">
                        <span className="contact-info ">LastName:</span>
                        <input 
                            className="contact-input w-100" 
                            type="text"
                            value={data.LastName}
                            onChange={(e)=>setData({...data,LastName:e.target.value})}/>
                        </div>
                        <span className="contact-info ">Email:</span>
                        <input 
                            className="contact-input " 
                            type="email"
                            value={data.Email}
                            onChange={(e)=>setData({...data,Email:e.target.value})}/>
                        <span className="contact-info ">CV:</span>
                        <input 
                            className="contact-input " 
                            type="file"
                            accept=".docx, application/pdf"
                            onChange={(e)=>setData({...data,CV:e.target.files[0]})}/>
                        <button className="btn btn-tech w-100" type="submit">Send</button>
                    </div>
                </div>
            </form>      
        </div>
        
    )
}
export default JoinUs;