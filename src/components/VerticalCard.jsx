import "./style.css"
import { FaRegHeart} from "react-icons/fa"

const VerticalCard = ({ brand, category, discount, gender, inStock, name, price, rating, _id, img, alt}) => {
    return (
        <div class="card-container box-shadow flex-column mb-2">
            <div class="card-image-container flex-column">
                <img class="card-image image-res" src={img} alt={alt} />
            </div>
            <div class="card-content-container flex-column">
                <div class="card-heading black-text mb-2">{name}</div>
                <div class="card-price flex-row">
                <div class="price-currency mr-1">MRP: </div>
                <div class="price-value mr-1"><strike>₹{price}</strike></div>
                <div class="price-dis-value">₹{price - (discount*price/100)}</div>
            </div>
            <div class="card-rating flex-row">
                <div class="card-rating-value">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="card-rating-desc ml-2"> ( {rating} ) </div>
            </div>
            <div class="card-button flex-row container">
                <button class="card-button card-wishlist align-self-center"><FaRegHeart /></button>
                <button class="card-button card-cart align-self-center">Add To Cart</button>
            </div>
        </div>
        <div class="card-badge-top">{discount}% OFF</div>
        </div>
       
    )
}

export { VerticalCard }