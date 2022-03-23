import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./style.css";



const Review = ({ review, by }) => {
    return (
        <div className="card-container box-shadow flex-column">
            <div className="card-heading flex-row p-1">
                <FontAwesomeIcon className="mr-1 quote-icon" icon={ faQuoteLeft } />
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