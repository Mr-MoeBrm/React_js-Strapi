
import ai from '../photos/ai.svg';
import development from '../photos/development.svg';
import integration from '../photos/integration.svg';
import offshore from '../photos/offshore.svg';
const Skills =()=>{

    return (
        <div className="container skills" id="SKILLS">
            <div className="row">
                <div className="col-md">
                    <span className="title">Our skills</span>
	                <p className="paragraph">We know that every business has a different IT environment and digital roadmap, that is why we provide a wide range of software development, AI and business software integration services. Check out the key services below.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="card">
                        <img className="card-img-top" src={development} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Web App Development</h5>
                            <p className="card-text">We are an agile team of web development experts. We convert your idea into solid, safe, and reliable custom application with our full-cycle software development services.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="card">
                        <img className="card-img-top" src={offshore} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Web App Development</h5>
                            <p className="card-text">We are an agile team of web development experts. We convert your idea into solid, safe, and reliable custom application with our full-cycle software development services.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="card">
                        <img className="card-img-top" src={ai} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Web App Development</h5>
                            <p className="card-text">We are an agile team of web development experts. We convert your idea into solid, safe, and reliable custom application with our full-cycle software development services.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="card">
                        <img className="card-img-top" src={integration} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Web App Development</h5>
                            <p className="card-text">We are an agile team of web development experts. We convert your idea into solid, safe, and reliable custom application with our full-cycle software development services.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default Skills;