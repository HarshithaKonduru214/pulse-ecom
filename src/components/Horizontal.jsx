import { FaStar, FaRegStar, FaTimes, FaStarHalfAlt, FaPlus, FaMinus } from "react-icons/fa"
const Horizontal = () => {
    const ratingHandler = (rating) => {
        return [...Array(Math.floor(rating / 1))]
    }
    return (
            <div class="card-container-hor box-shadow horizontal-card">
                <FaTimes className="card-close" />
                <div class="card-header flex-row mb-2 mt-2">
                    <div class="card-image-container-hor p-1">
                        <img class="card-image image-no-border" src="https://pulse-fragrances.netlify.app/images/perfume.jpg" alt="product" />
                    </div>
                    <div class="card-content-container p-2 flex-column justify-content-between">
                        <div class="card-heading-container">
                            <div class="card-heading">Versace Pour Homme Eau De Toilette(100ml)
                            </div>
                            <div class="card-content justify-content-between">
                                <div class="card-rating flex-row gap">
                                    <div className="card-rating-value">
                                        {ratingHandler(4.3).map((item) => <FaStar />)}
                                        {(4.3 % 1) ? <FaStarHalfAlt /> : <FaRegStar />}
                                    </div>
                                    <div class="card-rating-number">4.3 / 5</div>
                                </div>
                            </div>                           
                            <div className="card-price flex-row">
                                <div className="price-currency mr-1">MRP: </div>
                                <div className="price-value mr-1"><strike>₹123</strike></div>
                                <div className="price-dis-value">₹85</div>
                            </div>                           
                        </div>
                        <div class="card-footer flex-row justify-content-between container">
                            <div class="card-qty flex-row">
                            <div class="card-qty-content align-self-center mr-1">Quantity: </div>
                                <div class="card-qty-icon align-self-center mr-1"><FaMinus /></div>
                                <div class="card-qty-content align-self-center mr-1">1</div>
                                <div class="card-qty-icon align-self-center mr-1"><FaPlus /></div>
                            </div>
                            <div class="card-button card-wishlish secondary-button">MOVE TO WISHLIST</div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export { Horizontal }