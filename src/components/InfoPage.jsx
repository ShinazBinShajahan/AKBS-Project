import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function InfoPage() {
    return (
        <>
            <div id="#about" className="infopage-container">
                <div className="infopage-items">
                    <div className="infopage-contents">
                        <div data-aos="fade-left"><h3>What is Akhila Kerala Balajana Sakhyam?</h3></div>
                        <p data-aos="fade-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, accusantium quas consequuntur nulla mollitia eum magni soluta quia similique! Dolorem, at corrupti! Aspernatur deserunt possimus inventore consectetur vitae nobis nihil.
                            Culpa ipsa asperiores consequatur temporibus, illo ex dolores dolorem soluta adipisci qui tempore quaerat magnam cumque enim provident maxime sapiente molestiae numquam officia laboriosam sit? Modi dignissimos ducimus sint placeat!
                            Laudantium accusantium possimus modi alias exercitationem necessitatibus suscipit saepe dolorem nemo aperiam non voluptates ipsam quasi a ipsa maxime nulla tempora assumenda obcaecati inventore ullam ab, ratione esse dignissimos. Saepe?</p>
                    </div>
                    <div className="infopage-images" >
                        <div className="stacked-images">
                            <div className="infoimage-card1">
                                <img className="info-image1" src="https://placehold.co/200x300.png" />
                            </div>
                            <div className="infoimage-card2" >
                                <img className="info-image2" src="https://placehold.co/200x300.png" />
                            </div>
                            <div className="infoimage-card3">
                                <img className="info-image3" src="https://placehold.co/200x300.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default InfoPage;