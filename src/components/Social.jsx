import "./style.css"
import { FaTruck, FaCertificate, FaTag, FaUndo } from "react-icons/fa"

const Social = ({ heading, content, icon }) => {
    const iconHandler = (icon) => {
        switch (icon) {
            case "FaTruck": return <FaTruck />;
            case "FaRotate" : return <FaUndo />;
            case "FaCertificate": return <FaCertificate />;
            default: return <FaTag />;
        }
    }
    return (
        <div className="social-media-item flex-row p-2">
            <div className="social-icons mt-2">{iconHandler(icon)}</div>
            <div className="social-content flex-column p-2">
                <div className="social-heading margin-bottom-xs">{ heading }</div>
                <div className="social-desc mt-2 gray-text">{ content }</div>
            </div>
        </div>
    )
}

export { Social }