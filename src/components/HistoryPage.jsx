import mountain from '../assets/mountain.png';
import sun from '../assets/sun.png';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
gsap.registerPlugin(ScrollTrigger);
function HistoryPage() {
    useEffect(() => {
        gsap.to(".mountain2", {
            x: 200,
            opacity: 0.2,
            duration: 16,
            scrollTrigger: {
                trigger: ".mountain2",
                start: "top 70%",
                end: "top 90%",
                scrub: 1
            }
        });
    }, []);
    useEffect(() => {
        gsap.to(".mountain1", {
            x: -200,
            opacity: 0.2,
            duration: 16,
            scrollTrigger: {
                trigger: ".mountain1",
                start: "top 70%",
                end: "top 90%",
                scrub: 1
            }
        });
    }, []);
    useEffect(() => {
        gsap.to(".sun-image", {
            y: "-250px",
            opacity: 0.1,
            duration: 16,

            scrollTrigger: {
                trigger: ".sun-image",
                start: "top 100%",
                end: "top 70%",
                scrub: 1,
            }
        });
    }, []);
    return (
        <>
            <div className="historypage-container">
                <div className="greenbar-top"></div>
                <div data-aos="fade-up-right"><h1 >History of AKBS</h1></div>
                <div data-aos="fade-up-left"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe veniam maxime et dolorum maiores eaque praesentium quasi pariatur fugiat temporibus sint placeat voluptas eligendi sequi, officia eveniet doloremque officiis.
                    Doloribus reprehenderit, sed qui in voluptatem quas laboriosam esse pariatur ducimus delectus nisi quae ad ipsa modi necessitatibus, optio placeat id? Provident aliquid possimus debitis blanditiis quasi culpa voluptatum consectetur.
                    Fugit, sed quibusdam, nisi cum accusantium fugiat id quam accusamus debitis ipsa dicta nesciunt soluta consequuntur perspiciatis, quae itaque repudiandae. Harum cum soluta alias odio illum esse maxime vitae! Libero!
                    Tenetur dolore, est, velit quasi in nostrum, doloremque consequuntur eveniet culpa eaque odio nihil! Magnam harum accusantium aut expedita in hic sunt maxime dolore magni sequi eligendi reprehenderit, ad obcaecati?
                    Rem voluptate rerum eaque. Adipisci recusandae delectus fugit doloremque, reprehenderit ipsum est, corrupti fugiat voluptate quae iste sapiente ea. Sit doloribus dolores explicabo ab odio deserunt nam, in laborum quis?
                    Sapiente iusto, provident dolore optio ea odio? Natus quae a quia eaque voluptas illo distinctio corrupti aut numquam sed, tempore libero, possimus tenetur, assumenda illum aspernatur at non cum corporis?</p>
                </div>
                <img src={mountain} className="mountain mountain1" alt="" />
                <img src={mountain} className="mountain mountain2" alt="" />
                <img src={sun} className='sun-image' />
            </div>
        </>
    );
};
export default HistoryPage;