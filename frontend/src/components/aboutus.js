
import info from '../photos/info_bg.png';

const About =()=>{

    return (
        <div className="container about" id="ABOUT">
            <div className="row">
                <div className="col-12 col-md-6">
                    <h2 className="title">About Tech-Expert</h2>
                    <p className="paragraph">Tech-Expert is a Software Development and IT Outsourcing company. We Provide Agile Software Development Services to support our customers, from any sector, to anticipate, innovate and succeed in their transition towards digital technologies.</p>
	                <p className="paragraph">Whether you need a web or mobile app project built from scratch or just a set of new functions added to the existing project, you are at the right place. We offer a full range of services from the initial planning and design to deploying the finished code on the live environment along with post launch support and add-ons development.</p>
                    <a href="#CONTACT" className="btn btn-tech">Contact Us</a>
                </div>
                <div className="d-md-block col-md-6 d-none">
                    <img className="info" src={info} Alt="info"/>
                </div>
            </div>
        </div>
    )
};
export default About;