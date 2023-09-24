import akbsLogo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faLightbulb, faHourglassEnd, faVideo, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

function Navbar(){
    return(
        <>
        <div className='home-banner' data-aos="fade-up">
          <h3>Akhila Kerala Balajana Sakhyam</h3>
        </div>
        <div className="navbar">
          <div className="nav-image">
            <img src={akbsLogo} alt="" data-aos="fade-in" />
          </div>
          <div className="nav-links">
            <a className='navigations-links' href="#"><FontAwesomeIcon icon={faHouse} /> Home </a>
            <a className='navigations-links' href="#about"><FontAwesomeIcon icon={faLightbulb} /> About </a>
            <a className='navigations-links' href="#history"><FontAwesomeIcon icon={faHourglassEnd} /> History </a>
            <a className='navigations-links' href="#"><FontAwesomeIcon icon={faVideo} /> Videos </a>
            <a className='navigations-links' href="#"><FontAwesomeIcon icon={faCalendarCheck} /> Events </a>
          </div>
          <a href="#" className="join-us" data-aos="fade-in">Join Us</a>
        </div>
        </>
    );
};

export default Navbar;