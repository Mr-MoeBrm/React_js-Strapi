import React ,{useState,useEffect} from 'react';
import {ArrowLeft, ArrowUp} from 'react-bootstrap-icons';
import { Helmet } from 'react-helmet';
import {FetchOffers} from '../api/api';
const Offres=()=>{
const Title="Offers";
const [data,setData]=useState('');
useEffect(()=>{
    FetchOffers().then((res) => setData(res.data));
},[])
    return(
        <>
        <Helmet>
          <title>{ Title }</title>
        </Helmet>
        <div className="container">
        <div className="row pt-5">
                <div className="col-12">
                    <a className="btn btn-back" href="/"><ArrowLeft/> Get back to Tech-Expert</a>
                </div>
            </div>
        </div>
        <div className="container Offres">
            <div className="row">
                {
                    data!=="" ?
                    data.map((offre)=>(

                        <div className="col-12 col-md-6 " key={offre.id}>
                    <a href={`/offers/${offre.id}`} className="card offre">
                     <div className="row"> 
                            <h4 className="offre-title">{offre.title}</h4>
                            <p className="offre-description">{offre.description}</p>
                        </div>                      
                        <div className="row">
                            <hr/>
                            <ul className="offre-details">
                                <li>Experience: {offre.Experience}</li>
                                <li>Education: {offre.Study_level}</li>
                                <li>Expire In: {offre.Expiration_date}</li>
                            </ul>
                        </div>
                    </a>
                </div>            
                    ))
                    :"nothing yet"
                }
            </div>
        </div>
        </>
    )

}
export default Offres;