import speechcloud1 from '../assets/speechbubble1.png';
import speechcloud2 from '../assets/mirror-speechbubble1.png';
import kidsPic from '../assets/kids.png';
import ReactTyped from "react-typed";
import Navbar from '../components/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function HomePage() {
  return (
    <>
      <div className='homepage'>
        <Navbar />
        <div className='cloud'>
          <div className='cloudspeech1 '>
            <img src={speechcloud1} className='cloudimage1' />
            <h3>
              <ReactTyped strings={["Hello Friends..!"]} typeSpeed={50} />
            </h3>
          </div>
          <div className='cloudspeech2'>
            <img src={speechcloud2} className='cloudimage2' />
            <p><span> <ReactTyped strings={["Welcome to <strong>Akhila Kerala Balajana Sakhyam</strong>'s Official website...Let's join <strong>Balajana Sakhyam</strong> Right Now ..!", "</br>Click the <strong>JOIN BUTTON</strong> Friends..!</span>"]} typeSpeed={40} loop /></span></p>
          </div>
        </div>
        <div className="home-footer">
          <img src={kidsPic} data-aos="fade-down" className='' alt="kids" />
        </div>
      </div>
    </>
  );
}

export default HomePage;