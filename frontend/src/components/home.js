import React from 'react';
import Nav from './Nav';
import About from './aboutus';
import Skills from './skills';
import Expertise from './Expertise';
import Partners from './Partners';
import Contact from './contact';

import logo from '../photos/logo.black.svg';
const Home =()=>{
    return(
        <div>
            <Nav></Nav>
            <div className="jumbotron">
                <div className="container landing">
                    <div className="row">
                        <div className="col-6 col-md-12">  
                            <p class="lead">Technological Expertise for Business Solutions</p>
                            <p>Your trusted tech partner with business-centric & custom solutions for your industry</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-grey">
                <About/>
                <Skills/>
            </div>
            <div className="container-fluid bg-greyish">
                <Expertise/>
            </div>
            <div className="container-fluid bg-red">
                <Partners/>
            </div>
            <div className="toggler">
                <Contact/>
            </div>
            <footer className="container footer">
                <img className="logo-footer" src={logo} alt="tech-expert"/>
                <div>© 2021 Tech-Expert. All rights reserved.</div>
            </footer>
        </div>
    )
};
export default Home;