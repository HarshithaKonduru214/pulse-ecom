import "./style.css";
import { FaRegTimesCircle } from "react-icons/fa";

const Toast = ({msg}) => {
    return (
        <div>
            <div class="alert alert-error p-2 mb-2 flex-row justify-content-between">
                <div>{ msg }</div>
                <div><FaRegTimesCircle /></div>
            </div>
        </div>
    )
}

export { Toast }