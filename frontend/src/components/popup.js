import React from "react";
import {X} from 'react-bootstrap-icons';


const Popup =({message,show,setshow})=>{
    
    return(
        <div className={show===false ? "popup" : "d-none"}>
            <button className="btn Globe2" onClick={()=>setshow(false)}><X size={24}/></button>
            <p>{message}</p>
        </div>
    )
}

export default Popup;