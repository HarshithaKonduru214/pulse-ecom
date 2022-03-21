import "./Nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { faMagnifyingGlass, faHeart, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    const brands = ["Dior", "Davidoff", "Versace", "Calvin Klien", "Gucci", "Nykaa", "Engage"]
    const types = ["Perfumes(EDT/EDP)", "Body Mists / Sprays", "Deodorants / Roll-Ons" ]
    return (
        <nav class="nav mb-2 box-shadow">
        <div class="nav-content flex-row justify-content-between">
            <div class="nav-left flex-row gap ">
                <div class="nav-logo align-self-end ml-2"><a href="" class="no-style-link">pulse</a></div>
                <div class="nav-categories flex-row justify-content-main gap">
                    <div class="nav-category-item align-self-end pb-2">
                        <a class="list-heading no-style-link" href=""><strong>WOMEN</strong></a>
                        <div class="list-item-stacked box-shadow flex-column p-2">
                            { types.map((type) => <Link to="/" class="list-item gray-text no-style-link">{ type }</Link>)}
                        </div>
                    </div>
                    <div class="nav-category-item align-self-end pb-2">
                        <a class="list-heading no-style-link" href=""><strong>MEN</strong></a>
                        <div class="list-item-stacked box-shadow flex-column p-2">
                            { types.map((type) => <Link to="/" class="list-item gray-text no-style-link">{ type }</Link>)}
                        </div>
                    </div>
                    <div class="nav-category-item align-self-end pb-2">
                        <a class="list-heading no-style-link" href=""><strong>TOP BRANDS</strong></a>
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
                    <a href="" target="__blank" class="account mr-2 button no-style-link black-text"><FontAwesomeIcon className="mr-1" icon={ faUser } /><span
                            class="nav-user-title">Account</span></a>
                    <a href="" class="wishlist mr-2 button no-style-link black-text"><FontAwesomeIcon className="mr-1" icon={ faHeart } /><span
                            class="nav-user-title">Wishlist</span></a>
                    <a href="" class="cart mr-2 button no-style-link black-text"><FontAwesomeIcon className="mr-1" icon={ faCartShopping } /><span
                            class="nav-user-title">Cart</span></a>
                </div>
            </div>
        </div>
    </nav>
    );
}

export { Nav };