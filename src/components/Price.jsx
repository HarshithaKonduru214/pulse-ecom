import { useProducts } from "../Context/ProductContext"
import { Link } from "react-router-dom"

const Price = () => {
    const { totalPrice, discountPrice } = useProducts();
    return (
        <div>
            <div class="cart-sidebar-coupons flex-column">
                <div class="cart-coupon-heading gray-text mb-2">COUPONS</div>
                <div class="cart-coupon-container flex-row">
                    <div class="coupon-desc flex-row gap">
                        <div class="coupon-icon align-self-center"><i class="fas fa-tag"></i></div>
                        <div class="align-self-center coupon-text">Apply Coupons</div>
                    </div>
                    <button class="secondary-button-outlined button mb-2">APPLY</button>
                </div>
                <hr />
                <div class="cart-sidebar-price flex-column mt-2 mb-2">
                    <div class="cart-price-heading mb-2">Price Details</div>
                    <div class="cart-price flex-row justify-content-between pb-2">
                        <div class="cart-price-head">Total MRP</div>
                        <div class="cart-price-value">₹{totalPrice}</div>
                    </div>
                    <div class="cart-price flex-row justify-content-between pb-2">
                        <div class="cart-price-head">Discount on MRP</div>
                        <div class="cart-price-value">-₹{totalPrice - discountPrice}</div>
                    </div>
                    <div class="cart-price flex-row justify-content-between pb-2">
                        <div class="cart-price-head">Coupon Discount</div>
                        <Link to="/" class="no-style-link cart-price-value">Apply Coupon</Link>
                    </div>
                    <div class="cart-price flex-row justify-content-between pb-2">
                        <div class="cart-price-head">Delivery Fee</div>
                        <div class="cart-price-value">FREE</div>
                    </div>
                    <hr />
                    <div class="cart-price flex-row justify-content-between pb-2 mt-2">
                        <div class="cart-price-head black-text bold">Total Amount</div>
                        <div class="cart-price-value black-text bold">₹{discountPrice}</div>
                    </div>
                </div>
                <button class="primary-button button">PLACE ORDER</button>
            </div>
            <div class="cart-sidebar-price"></div>
            <div class="cart-sidebar-message"></div>
            <div class="cart-sidebar-button"></div>
        </div>
    )
}

export { Price }