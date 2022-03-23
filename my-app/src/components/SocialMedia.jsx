import { Social } from "./Social"
import "./style.css";
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMedia = () => {
    return (
        <div>
            <div class="social-media flex-row justify-content-between m-2">
                <div class="social-media-left flex-row justify-content-even gap"></div>
                    <Social heading="FREE SHIPPING" content="For orders above Rs.999." icon="faTruck" />
                    <Social heading="EASY RETURNS" content="15 Day Easy Returns For Most Products." icon="faTruck" />

                    <Social heading="AUTHENTIC PRODUCTS" content="Sourced Directly from Brands/ Authorised Distributors." icon="faTruck" />
                    <Social heading="10+ BRANDS" content="Well curated list of brands" icon="faTruck" />
                <div/>
                <div class="social-media-right">
                <div class="social-media-item flex-column p-2 mt-2">
                    <div class="social-heading align-self-center">SHOW US SOME LOVE</div>
                    <div class="social-links flex-row align-self-center">
                        <a href="#"><FontAwesomeIcon className="social-icons mt-2 mr-1" icon={ faTruck } /></a>
                        <a href="#"><FontAwesomeIcon className="social-icons mt-2 mr-1" icon={ faTruck } /></a>                        
                        <a href="#"><FontAwesomeIcon className="social-icons mt-2 mr-1" icon={ faTruck } /></a>
                    </div>
                </div>
            </div>
        </div></div>
        
    )
}

export { SocialMedia }