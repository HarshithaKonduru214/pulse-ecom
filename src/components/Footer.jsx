import "./style.css";
import { Link } from "react-router-dom"
import { FaHeart } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer flex-column m-2 p-2 gap">
            <div className="policy flex-row">
                <Link to="/" className="no-style-link white-text">TERMS & CONDITIONS</Link>
                <Link to="/" className="no-style-link white-text">CANCELLATION POLICY</Link>
                <Link to="/" className="no-style-link white-text">SHIPPING POLICY</Link>
                <Link to="/" className="no-style-link white-text">PRIVACY POLICY</Link>
            </div>
            <div class="footer-note">
                © 2022 Pulse - Made with <FaHeart /> by Harshitha Konduru
            </div>
        </div>
    )
}

export { Footer }