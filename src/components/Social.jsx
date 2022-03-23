import { faTruck, faRotateLeft, faCertificate, faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./style.css"

const Social = ({ heading, content, icon }) => {
    const iconHandler = (icon) => {
        switch (icon) {
            case "faTruck": return faTruck;
            case "faRotateLeft" : return faRotateLeft;
            case "faCertificate": return faCertificate;
            default: return faTag;
        }
    }
    return (
        <div className="social-media-item flex-row p-2">
            <div className="social-icons mt-2"><FontAwesomeIcon icon={ iconHandler(icon) } /></div>
            <div className="social-content flex-column p-2">
                <div className="social-heading margin-bottom-xs">{ heading }</div>
                <div className="social-desc mt-2 gray-text">{ content }</div>
            </div>
        </div>
    )
}

export { Social }