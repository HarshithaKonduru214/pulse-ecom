import { Footer, Nav, SocialMedia, VerticalCard } from "../../components"
import "../../components/style.css"
import "./wishlist.css"
import { FaUser, FaShoppingBag, FaHeart, FaCreditCard, FaPowerOff } from "react-icons/fa"
import { useProducts } from "../../Context/ProductContext"
import { useAuth } from "../../Context/AuthContext"

const Wishlist = () => {
    const { logoutHandler } = useAuth();
    const { wishlist } = useProducts();
    return (
        <div>
            <Nav />
            <main className="wishlist-container">
                <div className="wishlist-sidebar">
                    <div class="wish-sidebar-container">
                        <div class="wish-side-button">
                            <button class="wish-button pb-2"><FaUser className="mr-2" />My Profile</button>
                        </div>
                    </div>
                    <div class="wish-sidebar-container">
                        <div class="wish-side-button">
                            <button class="wish-button"><FaShoppingBag className="mr-2" />My Orders</button>
                        </div>
                    </div>
                    <div class="wish-sidebar-container">
                        <div class="wish-side-button"> 
                            <button class="wish-button"><FaHeart className="mr-2" />My Wishlist</button>
                        </div>
                    </div>
                    <div class="wish-sidebar-container">
                        <div class="wish-side-button">
                            <button class="wish-button"><FaCreditCard className="mr-2" />My Saved Payments</button>
                        </div>
                    </div>
                    <div class="wish-sidebar-container">
                        <div class="wish-side-button">
                            <button class="wish-button"><FaPowerOff className="mr-2" onClick={() => logoutHandler()} />Logout</button>
                        </div>
                    </div>
                </div>
                <div class="wishlist-content flex-column">
                    <div class="wishlist-heading heading flex-row p-2">My Wishlist</div><hr />
                    <div class="product-container flex-row gap mt-2">
                    { wishlist && wishlist.map(({ brand, category, discount, gender, inStock, name, price, rating, _id, img, alt, quantity}) => {
                        return (
                        <VerticalCard brand={brand} category={category} discount={discount} gender={gender} _id={_id} inStock={inStock} name={name} price={price} rating={rating} img={img} alt={alt} quantity={quantity} />
                    )})} 
                    </div>
                </div>
            </main>
            <SocialMedia />
            <Footer />
        </div>
    )
    
}

export { Wishlist }