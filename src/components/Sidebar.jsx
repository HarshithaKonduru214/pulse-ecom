import "../components/style.css";
import { useProducts } from "../Context/ProductContext"

const Sidebar = () => {
    const { dispatch } = useProducts();
    return (
        <div>
            <div className="sidebar flex-column">
                <div className="sidebar-header flex-row justify-content-between">
                    <div className="sidebar-name mb-2 align-self-center">FILTERS</div>
                    <button className="sidebar-clear">CLEAR ALL</button>
                </div>
                <div className="sidebar-sort-by mb-2">
                    <div className="sidebar-heading pb-2">Sort By: </div>
                    <label htmlFor="sort-by"></label>
                    <select className="dropdown" name="sort-by" id="sort-by" placeholder="Choose one" onChange={(e) => dispatch({type:"SORT", payload: e.target.value})}>
                        <option className="dropdown-items" value="choose" disabled hidden selected>Choose One</option>
                        <option className="dropdown-items" value="HIGH_TO_LOW">Price: High to Low</option>
                        <option className="dropdown-items" value="LOW_TO_HIGH">Price: Low to High</option>
                        <option className="dropdown-items" value="DISCOUNT">Discount</option>
                    </select>
                </div>
                <div className="sidebar-gender mb-2">
                    <div className="sidebar-heading pb-2">Gender</div>
                    <label htmlFor="female">
                    <input className="mr-1" type="radio" name="gender" id="female" />Female</label><br />
                    <label htmlFor="male">
                    <input className="mr-1" type="radio" name="gender" id="male" />Male</label><br />
                    <label htmlFor="unisex">
                    <input className="mr-1" type="radio" name="gender" id="unisex" />Unisex</label>
                </div>
                <div className="sidebar-rating mb-2">
                    <div className="sidebar-heading pb-2">Rating</div>
                    <input type="range" name="rating" id="rating" min="0" max="5" />
                </div>
                <div className="sidebar-category mb-2">
                    <div className="sidebar-heading pb-2">Brands</div>
                    <label htmlFor="dior">
                    <input className="checkbox mr-1" type="checkbox" name="dior" id="dior" />Dior</label>
                    <br />
                    <label htmlFor="davidoff">
                    <input className="checkbox mr-1" type="checkbox" name="davidoff" id="davidoff" />Davidoff</label>
                    <br />
                    <label htmlFor="versace">
                    <input className="checkbox mr-1" type="checkbox" name="versace" id="versace" />Versace</label>
                    <br />
                    <label htmlFor="calvin-klien">
                    <input className="checkbox mr-1" type="checkbox" name="calvin-klien" id="calvin-klien" />Calvin Klien</label>
                    <br />
                    <label htmlFor="gucci">
                    <input className="checkbox mr-1" type="checkbox" name="gucci" id="gucci" />Gucci</label>
                    <br />
                    <label htmlFor="nykaa">
                    <input className="checkbox mr-1" type="checkbox" name="nykaa" id="nykaa" />Nykaa</label>
                    <br />
                    <label htmlFor="engage">
                    <input className="checkbox mr-1" type="checkbox" name="engage" id="engage" />Engage</label>
                    <br />
                    <label htmlFor="out-of-stock">
                    <input className="checkbox mr-1" type="checkbox" name="out-of-stock" id="out-of-stock" />Include Out of Stock</label>
                    <br />
                </div>

            </div>
        </div>
    
    )
}

export { Sidebar }