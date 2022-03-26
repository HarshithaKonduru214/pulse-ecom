import { Banner, Nav, ShopBy, Review, Footer, SocialMedia } from "../../components/index";
import "../../components/style.css";

const Home = () => {
    return (
        <div>
            <Nav />
            <Banner />
            <main className="main-container mt-2">
                <div>
                    <div className="note1 mt-2">
                        <div className="message-container1 flex-row p-2">
                            <div className="message-name black-text justify-self-center align-self-center">pulse</div>
                            <div className="message-desc black-text justify-self-center align-self-center">100% Authentic Frangrances
                            </div>
                        </div>
                    </div>
                </div>
                <ShopBy />
                <div>
                    <div className="note m-2">
                        <div className="message-container flex-column p-2">
                            <div className="message black-text justify-self-center align-self-center">Please be careful of fraudulent
                                call and messages!</div>
                            <div className="message black-text justify-self-center align-self-center">Pulse will never call you with
                                offers pertaining to free gifts or prizes or payments through links.</div>
                        </div>
                    </div>
                </div>

                <div className="p-2">
                    <div className="review flex-column justify-content-around m-2">
                        <div className="heading align-self-center">REVIEWS</div>
                        <div className="review-container flex-row justify-content-around gap">
                            <Review review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s." by="Falguni Nayar" />
                            <Review review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s." by="Harshita" />
                            <Review review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s." by="Monica" />
                        </div>
                    </div>
                </div>

                

                <div>
                    <SocialMedia />
                </div>

                <div>
                    <Footer />
                </div>

                
                
                
            </main>
            
        </div>
    )
}

export { Home }