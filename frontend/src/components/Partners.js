
import ClubFreelance from '../photos/Club-Freelance.svg';
import Mindquest from '../photos/mindquest.svg';
import K2LIS from '../photos/K2LIS.svg';
import SESAME from '../photos/SESAME.svg';

const Partners=()=>{

    return(
        <div className="container partners-con" id="PARTNERS">
            <div className="row">
                <div className="col-md">
                    <span className="title">Our expertise</span>
	                <p className="paragraph">We apply our technological flair and our ability to harness our strategic insights when solving our clients’ individual challenges, and we can do it for you too!</p>
                </div>
            </div>
            <div className="row Partners">
                <a className="Partner" href="https://club-freelance.com" target="_blank">
                    <img className="Partner-img" src={ClubFreelance} alt="Club Freelance" />
                </a>
                <a className="Partner" href="https://mindquest.io" target="_blank">
                    <img className="Partner-img" src={Mindquest} alt="Mindquest" />
                </a>
                <a className="Partner" href="https://k2lis.com" target="_blank">
                    <img className="Partner-img" src={K2LIS} alt="K2LIS" />
                </a>
                <a className="Partner" href="https://universitesesame.com" target="_blank">
                    <img className="Partner-img" src={SESAME} alt="SESAME" />
                </a>
            </div>
        </div>
    )
}


export default Partners;