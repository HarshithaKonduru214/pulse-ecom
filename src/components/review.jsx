import "./style.css";
import { FaQuoteLeft } from "react-icons/fa"


const Review = ({ review, by }) => {
    return (
        <div className="card-container box-shadow flex-column">
            <div className="card-heading flex-row p-1">
                <FaQuoteLeft className="quote-icon"/>
            </div>
            <div className="card-content mb-2">
                { review }
            </div>
            <div className="card-by p-2">
                - { by }
            </div>
        </div>
    )
}

export { Review }