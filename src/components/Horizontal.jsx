import { FaStar, FaRegStar, FaTimes, FaStarHalfAlt, FaPlus, FaMinus } from "react-icons/fa"
import { useProducts } from "../Context/ProductContext"
const Horizontal = ({ brand, category, discount, gender, inStock, name, price, rating, _id, img, alt, quantity}) => {
    const { dispatch } = useProducts()
    
    const ratingHandler = (rating) => {
         return [...Array(Math.floor(rating / 1))]
    }
    return (
            <div class="card-container-hor box-shadow horizontal-card">
                <FaTimes className="card-close" onClick={() => dispatch({type: "REMOVE_FROM_CART", payload: { brand, category, discount, gender, inStock, name, price, rating, _id, img, alt, quantity} })}/>
                <div class="card-header flex-row mb-2 mt-2">
                    <div class="card-image-container-hor p-1">
                        <img class="card-image image-no-border" src={img} alt={alt} />
                    </div>
                    <div class="card-content-container p-2 flex-column justify-content-between">
                        <div class="card-heading-container">
                            <div class="card-heading">{name}
                            </div>
                            <div class="card-content justify-content-between">
                                <div class="card-rating flex-row gap">
                                    <div className="card-rating-value mb-2">
                                        {ratingHandler(Number(rating)).map((item) => <FaStar />)}
                                        {(rating % 1) ? <FaStarHalfAlt /> : <FaRegStar />}
                                    </div>
                                    <div class="card-rating-number">{rating} / 5</div>
                                </div>
                            </div>                           
                            <div className="card-price flex-row">
                                <div className="price-currency mr-1">MRP: </div>
                                <div className="price-value mr-1 gray-text"><strike>{price * quantity}</strike></div>
                                <div className="price-dis-value">₹{Math.floor(price - (discount*price/100)) * quantity}</div>
                            </div>                           
                        </div>
                        <div class="card-footer flex-row justify-content-between container">
                            <div class="card-qty flex-row">
                            <div class="card-qty-content align-self-center mr-1">Quantity: </div>
                                <button class="card-qty-icon align-self-center mr-1" onClick={() => dispatch({type: "DECREASE_QUANTITY", payload:{ brand, category, discount, gender, inStock, name, price, rating, _id, img, alt} })} disabled={quantity === 1}><FaMinus /></button>
                                <div class="card-qty-content align-self-center mr-1" >{quantity}</div>
                                <button class="card-qty-icon align-self-center mr-1" onClick={() => dispatch({type: "INCREASE_QUANTITY", payload:{ brand, category, discount, gender, inStock, name, price, rating, _id, img, alt} })} ><FaPlus /></button>
                            </div>
                            <div class="card-button card-wishlish secondary-button" onClick={() => {
                                dispatch({type: "ADD_TO_WISHLIST", payload:{ brand, category, discount, gender, inStock, name, price, rating, _id, img, alt} })
                                dispatch({type: "REMOVE_FROM_CART", payload:{ brand, category, discount, gender, inStock, name, price, rating, _id, img, alt} })
                            }}>MOVE TO WISHLIST</div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export { Horizontal }