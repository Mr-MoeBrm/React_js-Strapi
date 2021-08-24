
import Xero from '../photos/Xero.svg';
import Bullhorn from '../photos/Bullhorn.svg';
import DocuSign from '../photos/DocuSign.svg';
import Reactsvg from '../photos/React.svg';
import NodeJS from '../photos/NodeJS-1.svg';
import Python from '../photos/Python.svg';
import MongoDB from '../photos/MongoDB.svg';

const Expertise=()=>{

    return(
        <div className="container expertises-con" id="EXPERTISE">
            <div className="row">
                <div className="col-md">
                    <span className="title">Our expertise</span>
	                <p className="paragraph">We apply our technological flair and our ability to harness our strategic insights when solving our clients’ individual challenges, and we can do it for you too!</p>
                </div>
            </div>
            <div className="row expertises">
                <div className="expertise">
                    <img className="expertise-img" src={Xero} alt="Xero" />
                </div>
                <div className="expertise">
                    <img className="expertise-img" src={Bullhorn} alt="Bullhorn" />
                </div>
                <div className="expertise">
                    <img className="expertise-img" src={DocuSign} alt="DocuSign" />
                </div>
                <div className="expertise">
                    <img className="expertise-img" src={Reactsvg} alt="React" />
                </div>
                <div className="expertise">
                    <img className="expertise-img" src={NodeJS} alt="Node" />
                </div>
                <div className="expertise">
                    <img className="expertise-img" src={Python} alt="Python" />
                </div>
                <div className="expertise">
                    <img className="expertise-img" src={MongoDB} alt="MongoDB" />
                </div>
            </div>
        </div>
    )
}


export default Expertise;