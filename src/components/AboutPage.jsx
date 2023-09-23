import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mountain from '../assets/mountain.png';
import sun from '../assets/sun.png';
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

function AboutPage() {
  // useEffect(() => {
  //     gsap.to(".mountain1",{
  //         scrollTrigger:{
  //           trigger:".mountain1",
  //           scrub:1,
  //           start: 'bottom 0'
  //         },
  //         right:'60vw',
  //         duration:0
  //       });
  // }, []);
  useEffect(() => {
    gsap.to(".mountain2", {
      x: -200,
      duration: 16,
      scrollTrigger: {
        trigger: ".mountain2",
        start: "top 70%",
        end: "top 90%",
        scrub: true
      }
    });
  }, []);
  useEffect(() => {
    gsap.to(".mountain1", {
      x: 200,
      duration: 16,
      scrollTrigger: {
        trigger: ".mountain1",
        start: "top 70%",
        end: "top 90%",
        scrub: true
      }
    });
  }, []);
  useEffect(() => {
    gsap.to(".sun-image", {
      y: -200,
      duration: 16,
      scrollTrigger: {
        trigger: ".sun-image",
        start: "top 100%",
        end: "top 70%",
        scrub: true
      }
    });
  }, []);
  return (
    <>
      <div className="about-page-container">
        <div className='about-page'>
          <img src={mountain} className="mountain mountain1" alt="" />
          <img src={mountain} className="mountain mountain2" alt="" />
          <img src={sun} className='sun-image' />
          <div className="about-overlay">
            <div className="about-content">
              <h2 className='about-head'>About AKBS</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, corporis repellendus aspernatur eum nihil facilis explicabo amet nemo ipsum sapiente laudantium. Eligendi quis ducimus ad nam ab esse, mollitia nobis.
                Alias, autem vero perspiciatis quae recusandae molestiae animi in tempora ratione harum eaque omnis cumque excepturi, illo iusto accusantium laudantium. At repellat omnis ducimus, dicta voluptate recusandae asperiores in vel.
                Cupiditate magni tempora consectetur nostrum sapiente dolores corporis sunt, amet laudantium, omnis temporibus architecto dolore quibusdam voluptas consequatur numquam minima. Vitae quas provident minima atque sint dolor sed amet quaerat.
                Sequi ratione at sunt fuga! Rerum, error facilis nesciunt est nostrum quibusdam illo ut eos aperiam consequuntur libero perferendis esse enim a dignissimos repellendus eius ea ullam beatae! Quod, totam.
                At facere explicabo ex sunt asperiores! Deserunt, consectetur blanditiis saepe ex sapiente ratione id nobis molestias aliquam, soluta consequuntur accusantium nihil distinctio cupiditate, placeat minus repellendus culpa nulla ducimus quas.</p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default AboutPage;