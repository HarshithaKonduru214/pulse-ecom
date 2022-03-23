import banner from "../images/banner.svg";
import "./style.css";

const Banner = () => {
    return (
        <div className="banner m-2">
            <img className="image-res" src={ banner } alt="banner-img" />
        </div>
    );
}

export { Banner };