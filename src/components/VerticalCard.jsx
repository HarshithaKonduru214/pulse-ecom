import "./style.css"
import { useProducts } from "../Context/ProductContext"
import { FaRegHeart, FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa"
import { useState } from "react"
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const VerticalCard = ({ brand, category, discount, gender, inStock, name, price, rating, _id, img, alt}) => {
    const { dispatch } = useProducts();
    const { isLogin } = useAuth();
    const [click, setClick] = useState(false)
    console.log(isLogin)
    const navigate = useNavigate()
    const ratingHandler = (rating) => {
        return [...Array(Math.floor(rating / 1))] 
    }
    return (
        <div className="card-container box-shadow flex-column mb-2">
            <div className={`card-image-container flex-column ${inStock ? "" : "text-overlay" }`}>    
                <img className="card-image image-res" src={img} alt={alt} />
            </div>
            {inStock || <div class="overlay-text">OUT OF STOCK</div>}
            <div className={`card-content-container flex-column ${inStock ? "" : "text-overlay" }`}>
                <div className="card-heading black-text mb-2">{name}</div>
                <div className="card-price flex-row">
                <div className="price-currency mr-1 gray-text">MRP: </div>
                <div className="price-value mr-1 gray-text"><strike>₹{price}</strike></div>
                <div className="price-dis-value gray-text">₹{Math.floor(price - (discount*price/100))}</div>
            </div>
            <div className="card-rating flex-row">
                <div className="card-rating-value">
                    { ratingHandler(rating).map((item) => <FaStar />)}
                    {(rating % 1) ? <FaStarHalfAlt /> : <FaRegStar />}
                </div>
                <div className="card-rating-desc ml-2 gray-text"> ( {rating} ) </div>
            </div>
            <div className="card-button flex-row container">
                <button className="card-button card-wishlist align-self-center"><FaRegHeart /></button>
                <button className="card-button card-cart align-self-center" onClick={() => {
                    if(isLogin) {
                        setClick((prev) => !prev);
                        if(click) {
                            navigate("/cart")
                        } else {
                            dispatch({ type: "ADD_TO_CART", payload: { brand, category, discount, gender, inStock, name, price, rating, _id, img, alt} })
                    }} else {
                        navigate('/login')
                    }   
                }}>{ click ? "GO TO CART" : "ADD TO CART" }</button>
            </div>
        </div>
        <div className="card-badge-top">{discount}% OFF</div>
        </div>
       
    )
}

export { VerticalCard }