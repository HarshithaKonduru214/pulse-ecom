import { Banner } from "../../components/Banner";
import { Nav } from "../../components/Nav";
import { ShopBy } from "../../components/ShopBy";

const Home = () => {
    return (
        <div>
            <Nav />
            <Banner />
            <main class="main-container mt-2">
                <div class="note1 mt-2">
                    <div class="message-container1 flex-row p-2">
                        <div class="message-name black-text justify-self-center align-self-center">pulse</div>
                        <div class="message-desc black-text justify-self-center align-self-center">100% Authentic Frangrances
                        </div>
                    </div>
                </div>
                <ShopBy />
                <div class="note m-2">
                    <div class="message-container flex-column p-2">
                        <div class="message black-text justify-self-center align-self-center">Please be careful of fraudulent
                            call and messages!</div>
                        <div class="message black-text justify-self-center align-self-center">Pulse will never call you with
                            offers pertaining to free gifts or prizes or payments through links.</div>
                    </div>
                </div>
            </main>
            
        </div>
    )
}

export { Home }