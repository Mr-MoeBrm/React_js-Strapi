import React ,{useState,useEffect}from 'react';
import {ArrowLeft, ArrowUp} from 'react-bootstrap-icons';
import { Helmet } from 'react-helmet';
import {useParams} from 'react-router-dom';
import {SubmitInOffre,FetchOffer} from '../api/api';
const OffreDetail=()=>{
    const Title="Offers";
    const params=useParams();
    const [show,setShow]=useState(false);
    const [error,seterror]=useState();
    const [data,setData]=useState({offre:params.id,FirstName:"",LastName:"",Email:"",CV:""});
    const [recievedData,setrecieved]=useState();
    useEffect(()=>{
        FetchOffer(params.id).then((res) => setrecieved(res.data));
    },[]);
    const clear = () => {
        setData({offre:params.id,FirstName:"",LastName:"",Email:"",CV:""});
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

            SubmitInOffre(data).then(res => {
                alert(res.data);
            })
            .catch(err => {
                alert(err.data);
            });
            clear();
            setShow(false);
        }
        
    }
    return(
        <>
        <Helmet>{Title}</Helmet>
            <div className="container">
                <div className="row pt-5">
                    <div className="col-12">
                        <a className="btn btn-back" href="/Offers"><ArrowLeft/> Get back to The Offers</a>
                    </div>
                </div>
            </div>
            <div className="container contact-con">
            {
                    recievedData!=="" && recievedData!==undefined ?
                <div className="row" key={recievedData.id}>
                    <div className="col-md-6 col-12">
                        <h1>{recievedData.title}</h1>
                        <p>{recievedData.description}</p>
                    </div>
                    <div className="col-md-6 col-12">
                        <ul className="row off-details">
                            <li className="col-md-6 col-12"><h5>study level:</h5><span>{recievedData.Study_level}</span></li>
                            <li className="col-md-6 col-12"><h5>Experience:</h5><span>{recievedData.Experience}</span></li>
                            <li className="col-md-6 col-12"><h5>vacant jobs:</h5><span>{recievedData.candidates.length}/{recievedData.Vacant_jobs}</span></li>
                            <li className="col-md-6 col-12"><h5>Available Until:</h5><span>{recievedData.Expiration_date}</span></li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-12">
                        <button className="btn btn-tech w-100" onClick={()=>setShow(true)}>Submit</button>
                    </div>
                </div>
                 :"Still loading"
                }
            </div>
            
            <div className={show===true ? "submit-offre container" : 'd-none'} id="other">
            <form className="row" onSubmit={SubmitData}>
                <span>{error}</span>
                <div className="col-md-6 col-12">
                    <div className="row">
                        <div className="col-md-6 col-12 FirstName">
                        <span className="contact-info ">FirstName:</span>
                        <input 
                            className="contact-input w-100" 
                            type="text"
                            value={data.FirstName}
                            onChange={(e)=>setData({...data,FirstName:e.target.value})}
                        />
                        </div>
                        <div className="col-md-6 col-12 LastName">
                        <span className="contact-info ">LastName:</span>
                        <input 
                            className="contact-input w-100" 
                            type="text"
                            value={data.LastName}
                            onChange={(e)=>setData({...data,LastName:e.target.value})}
                        />
                        </div>
                        <span className="contact-info ">Email:</span>
                        <input 
                            className="contact-input " 
                            type="email"
                            value={data.Email}
                            onChange={(e)=>setData({...data,Email:e.target.value})}
                        />
                        <span className="contact-info ">CV:</span>
                        <input 
                            className="btn" 
                            type="file"
                            accept=".docx, application/pdf"
                            onChange={(e)=>setData({...data,CV:e.target.files[0]})}/>
                        <button className="btn btn-tech w-100" type="submit">Send</button>
                    </div>
                </div>
            </form>      
        </div>
        </>
    )
}
export default OffreDetail;