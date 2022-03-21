import banner from "../images/banner.svg";
import "./style.css";

const Banner = () => {
    return (
        <div class="banner m-2">
            <img class="image-res" src={ banner } alt="banner-img" />
        </div>
    );
}

export { Banner };