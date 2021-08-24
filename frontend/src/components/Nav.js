import React ,{ useState} from 'react';
import {List,Globe2} from 'react-bootstrap-icons';
const Nav =()=>{
    const [change,setChange]=useState('static');
        window.onscroll = () => {
            if(window.pageYOffset <= 10) 
                setChange('static'); 
            else 
                setChange('scroll');
        };
return (
    <nav className={`${change} fixed-top navbar navbar-expand-md`} id="navbar">
        <div className="container">
            <a className="navbar-brand logo" href="#"></a>
            <div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav2" aria-controls="navbarNav2" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon Globe2"><Globe2 size={24}/></span>
                </button>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon menu-btn"><List size={24}/></span>
                </button>
            </div>
            <div class="collapse menu navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-md-auto gap-2">
                    <li class="nav-item rounded">
                        <a class="nav-link active" aria-current="page" href="#ABOUT">ABOUT US</a>
                    </li>
                    <li class="nav-item rounded">
                        <a class="nav-link active" aria-current="page" href="#SKILLS">OUR SKILLS</a>
                    </li>   
                    <li class="nav-item rounded">
                        <a class="nav-link active" aria-current="page" href="#EXPERTISE">OUR EXPERTISE</a>
                    </li>   
                    <li class="nav-item rounded">
                        <a class="nav-link active" aria-current="page" href="#PARTNERS">OUR PARTNERS</a>
                    </li>   
                    <li class="nav-item rounded">
                        <a class="nav-link active" aria-current="page" href="#CONTACT">CONTACT US</a>
                    </li>               
                </ul> 
            </div>
            <div className="navbar-nav lang collapse navbar-collapse" id="navbarNav2">
                <div>FR</div>
                <hr className="w-100 d-md-none d-block"/>
                <div>EN</div>
            </div>
        </div>
    </nav>

)

};

export default Nav;
