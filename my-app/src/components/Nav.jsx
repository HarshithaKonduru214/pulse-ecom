import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { faMagnifyingGlass, faHeart, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { brands, types } from "../data"

const Nav = () => {
    
    return (
        <nav class="nav mb-2 box-shadow">
        <div class="nav-content flex-row justify-content-between">
            <div class="nav-left flex-row gap ">
                <div class="nav-logo align-self-end ml-2">
                    <Link to="/" class="no-style-link">pulse</Link>
                </div>
                <div class="nav-categories flex-row justify-content-main gap">
                    <div class="nav-category-item align-self-end pb-2">
                        <Link class="list-heading no-style-link" to="/">
                            <strong>WOMEN</strong>
                        </Link>
                        <div class="list-item-stacked box-shadow flex-column p-2">
                            { types.map((type) => <Link to="/" class="list-item gray-text no-style-link">{ type }</Link>)}
                        </div>
                    </div>
                    <div class="nav-category-item align-self-end pb-2">
                        <Link class="list-heading no-style-link" to="/"><strong>MEN</strong></Link>
                        <div class="list-item-stacked box-shadow flex-column p-2">
                            { types.map((type) => <Link to="/" class="list-item gray-text no-style-link">{ type }</Link>)}
                        </div>
                    </div>
                    <div class="nav-category-item align-self-end pb-2">
                        <Link class="list-heading no-style-link" to="/"><strong>TOP BRANDS</strong></Link>
                        <div class="list-item-stacked box-shadow flex-column p-2">
                            { brands.map( (brand) => <Link to="/" class="list-item gray-text no-style-link">{ brand }</Link>)}
                            
                        </div>
                    </div>
                </div>
            </div>

            <div class="nav-right flex-row justify-content-between">
                <div class="nav-search align-self-center gap flex-row">
                    <FontAwesomeIcon icon={ faMagnifyingGlass } />
                    <input class="align-self-center nav-search-bar" type="search" name="search"
                        placeholder="Search on Pulse" />
                </div>
                <div class="nav-user align-self-end mb-2">
                    <Link to="/" class="account mr-2 button no-style-link black-text"><FontAwesomeIcon className="mr-1" icon={ faUser } /><span
                            class="nav-user-title">Account</span></Link>
                    <Link to="/" class="wishlist mr-2 button no-style-link black-text"><FontAwesomeIcon className="mr-1" icon={ faHeart } /><span
                            class="nav-user-title">Wishlist</span></Link>
                    <Link to="/" class="cart mr-2 button no-style-link black-text"><FontAwesomeIcon className="mr-1" icon={ faCartShopping } /><span
                            class="nav-user-title">Cart</span></Link>
                </div>
            </div>
        </div>
    </nav>
    );
}

export { Nav };