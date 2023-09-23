import akbsLogo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faLightbulb, faHourglassEnd, faVideo, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import speechcloud1 from '../assets/speechbubble1.png';
import speechcloud2 from '../assets/speechbubble2.png';
import kidsPic from '../assets/kids.png';
import ReactTyped from "react-typed";


function HomePage() {
  return (
    <>
      <div className='homepage'>
        <div className='home-banner animate__animated animate__fadeIn'>
          <h3>Akhila Kerala Balajana Sakhyam</h3>
        </div>
        <div className="navbar">
          <div className="nav-image">
            <img src={akbsLogo} alt="" />
          </div>
          <div className="nav-links">
            <a className='navigations-links' href="#"><FontAwesomeIcon icon={faHouse} /> Home </a>
            <a className='navigations-links' href="#"><FontAwesomeIcon icon={faLightbulb} /> About </a>
            <a className='navigations-links' href="#"><FontAwesomeIcon icon={faHourglassEnd} /> History </a>
            <a className='navigations-links' href="#"><FontAwesomeIcon icon={faVideo} /> Videos </a>
            <a className='navigations-links' href="#"><FontAwesomeIcon icon={faCalendarCheck} /> Events </a>
          </div>
          <button className="join-us">Join Us</button>
        </div>
        {/* <div className='home-banner'>
          <h3>Akhila Kerala Balajana Sakhyam</h3>
        </div> */}
        <div className='cloud'>
          <div className='cloudspeech1 '>
            <img src={speechcloud1} className='cloudimage1'/>
            <h3>
            <ReactTyped strings={["Hello Friends..!"]} typeSpeed={50}  />
            </h3>
            </div>
            <div className='cloudspeech2'>
              <img src={speechcloud2} className='cloudimage2'/>
              <p><span> <ReactTyped strings={["Welcome to Akhila Kerala Balajana Sakhyam's Official website...Let's join Balajana Sakhyam Right Now ..!"]} typeSpeed={20} /></span></p>
              </div>
          </div>
        <div className="home-footer">
          <img src={kidsPic} className='animate__animated animate__swing' alt="kids" />
        </div>
      </div>
    </>
  );
}

export default HomePage;