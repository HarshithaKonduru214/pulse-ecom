import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./style.css"

const Social = ({ heading, content, icon }) => {
    return (
        <div class="social-media-item flex-row p-2">
            <div class="social-icons mt-2"><FontAwesomeIcon icon={ icon === "faTruck" && faTruck } /></div>
            <div class="social-content flex-column p-2">
                <div class="social-heading margin-bottom-xs">{ heading }</div>
                <div class="social-desc mt-2 gray-text">{ content }</div>
            </div>
        </div>
    )
}

export { Social }