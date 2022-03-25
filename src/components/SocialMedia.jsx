import { Social } from "./Social"
import "./style.css";
import { FaLinkedin, FaTwitterSquare, FaGithubSquare} from "react-icons/fa"

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
                <div class="social-media-right">
                    <div class="social-media-item flex-column p-2 mt-2">
                        <div class="social-heading align-self-center">SHOW US SOME LOVE</div>
                        <div class="social-links flex-row align-self-center">
                            <a href="https://www.linkedin.com/in/harshita-k/"><FaLinkedin class="social-icons mt-2 mr-1 fab fa-github-square" /></a>
                            <a href="https://twitter.com/HarshitaKonduru"><FaTwitterSquare class="social-icons mt-2 mr-1 fab fa-linkedin" /></a>
                            <a href="https://github.com/HarshithaKonduru214"><FaGithubSquare class="social-icons mt-2 mr-1 fab fa-twitter-square" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export { SocialMedia }