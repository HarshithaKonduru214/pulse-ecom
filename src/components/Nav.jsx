import "./style.css";
import { Link } from "react-router-dom";
import { FaHeart, FaUser, FaShoppingCart } from "react-icons/fa"
import { brands, types } from "../data"
import { useAuth } from "../Context/AuthContext";
import { useProducts } from "../Context/ProductContext"

const Nav = () => {
    const { user, logoutHandler, isLogin, dispatch } = useAuth();
    const { cart } = useProducts();
    
    return (
        <nav className="nav mb-2 box-shadow">
            <div className="nav-content flex-row justify-content-between">
                <div className="nav-left flex-row gap ">
                    <div className="nav-logo align-self-end ml-2">
                        <Link to="/" className="no-style-link">pulse</Link>
                    </div>
                    <div className="nav-categories flex-row justify-content-main gap">
                        <div className="nav-category-item align-self-end pb-2">
                            <Link className="list-heading no-style-link" to="/product-listing" onClick={() => dispatch({type:"FILTER_GENDER", payload: "female"})}>
                                <strong>WOMEN</strong>
                            </Link>
                            <div className="list-item-stacked box-shadow flex-column p-2">
                                { types.map((type) => <Link to="/" key={type} className="list-item gray-text no-style-link">{ type }</Link>)}
                            </div>
                        </div>
                        <div className="nav-category-item align-self-end pb-2">
                            <Link className="list-heading no-style-link" to="/product-listing" ><strong>MEN</strong></Link>
                            <div className="list-item-stacked box-shadow flex-column p-2">
                                { types.map((type) => <Link to="/" key={type} className="list-item gray-text no-style-link">{ type }</Link>)}
                            </div>
                        </div>
                        <div className="nav-category-item align-self-end pb-2">
                            <Link className="list-heading no-style-link" to="/"><strong>TOP BRANDS</strong></Link>
                            <div className="list-item-stacked box-shadow flex-column p-2">
                                { brands.map( (brand) => <Link to="/" key={brand} className="list-item gray-text no-style-link">{ brand }</Link>)}             
                            </div>
                        </div>
                    </div>
                </div>

                <div className="nav-right flex-row justify-content-between">
                    <div className="nav-search align-self-center gap flex-row">
                        <input className="align-self-center nav-search-bar" type="search" name="search"
                            placeholder="Search on Pulse" />
                    </div>
                    <div className="nav-user align-self-end">
                        <Link to="/" className="wishlist mr-2 button no-style-link black-text"><FaHeart className="mr-1" /><span
                                className="nav-user-title">Wishlist</span></Link>
                        <Link to={isLogin ? "/cart" : "/login"} className="cart mr-2 button no-style-link black-text"><FaShoppingCart className="mr-1" /><span
                                className="nav-user-title">Cart ( {cart.length} )</span></Link>         
                        <div className="nav-category-item align-self-end pb-2">
                            <Link to="/" className="account mr-2 button no-style-link black-text"><FaUser className="mr-1"/><span
                                className="nav-user-title">{isLogin ? user.firstName : "Account"}</span></Link>
                            <div className="list-item-stacked box-shadow flex-column mr-1">
                                <button className="list-item gray-text account-item">PROFILE</button>
                                <button className="list-item gray-text account-item">PAYMENTS</button>
                                <button className="list-item gray-text account-item">ORDERS</button>
                                <button className="list-item gray-text account-item" onClick={() => logoutHandler()}>{isLogin ? "LOGOUT": "LOGIN"}</button>
                            </div>
                        </div>          
                    </div>
                </div>
            </div>
        </nav>
    );
}

export { Nav };