import { Social } from "./Social"
import "./style.css";

const SocialMedia = () => {
    return (
        <div>
            <div className="social-media flex-row justify-content-between m-2">
                <div className="social-media-left flex-row justify-content-even gap"></div>
                    <Social heading="FREE SHIPPING" content="For orders above Rs.999." icon="FaTruck" />
                    <Social heading="EASY RETURNS" content="15 Day Easy Returns For Most Products." icon="FaRotate" />

                    <Social heading="AUTHENTIC PRODUCTS" content="Sourced Directly from Brands/ Authorised Distributors." icon="FaCertificate" />
                    <Social heading="10+ BRANDS" content="Well curated list of brands" icon="FaTag" />
                <div/>
            </div>
        </div>
        
    )
}

export { SocialMedia }