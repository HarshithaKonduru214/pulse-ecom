import "./style.css";
import { FaRegTimesCircle } from "react-icons/fa";

const Toast = ({type,msg}) => {
    return (
        <div style={{display: (type !== "") ? "block" : "none"}}>
            <div className={`alert alert-${type} p-2 mb-2 flex-row justify-content-between`}>
                <div className="mr-2">{ msg }</div>
                <div><FaRegTimesCircle className="alert-close-icon align-self-center" /></div>
            </div>
        </div>
    )
}

export { Toast }