import { useState } from "react";
import "../components/style.css";
import { useProducts } from "../Context/ProductContext"

const Sidebar = () => {
    const { dispatch } = useProducts();
    const [price, setPrice] = useState(10000)
    return (
        <div>
            <form className="sidebar flex-column">
                <div className="sidebar-header flex-row justify-content-between">
                    <div className="sidebar-name mb-2 align-self-center">FILTERS</div>
                    <button className="sidebar-clear" onClick={() => {
                        dispatch({type:"RESET", payload:"reset"})
                    }}>CLEAR ALL</button>
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
                    <input className="mr-1" type="radio" name="gender" id="female" value="female" onChange={() => dispatch({type:"FILTER_GENDER", payload: "female"})}/>Female</label><br />
                    <label htmlFor="male">
                    <input className="mr-1" type="radio" name="gender" id="male" value="male" onChange={() => dispatch({type:"FILTER_GENDER", payload: "male"})}/>Male</label><br />
                    <label htmlFor="unisex">
                    <input className="mr-1" type="radio" name="gender" id="unisex" value="unisex" onChange={() => dispatch({type:"FILTER_GENDER", payload: "unisex"})}/>Unisex</label>
                </div>
                <div className="sidebar-rating mb-2">
                    <div className="sidebar-heading pb-2">Price: 0 to {price}</div>
                    <input type="range" list="tickmarks" name="rating" id="rating" min="1000" max="10000" step="1000" onChange={(e) => {
                        setPrice(e.target.value);
                        dispatch({type:"FILTER_BY_PRICE", payload: e.target.value})}} />
                </div>
                <div className="sidebar-category mb-2">
                    <div className="sidebar-heading pb-2">Brands</div>
                    <label htmlFor="dior">
                    <input className="checkbox mr-1" type="checkbox" name="dior" id="dior" onChange={(e) => dispatch({type:"FILTER_BY_BRAND", payload: "dior"})}/>Dior</label>
                    <br />
                    <label htmlFor="davidoff">
                    <input className="checkbox mr-1" type="checkbox" name="davidoff" id="davidoff" onChange={(e) => dispatch({type:"FILTER_BY_BRAND", payload: "davidoff"})}/>Davidoff</label>
                    <br />
                    <label htmlFor="versace">
                    <input className="checkbox mr-1" type="checkbox" name="versace" id="versace" onChange={(e) => dispatch({type:"FILTER_BY_BRAND", payload: "versace"})}/>Versace</label>
                    <br />
                    <label htmlFor="calvin-klien">
                    <input className="checkbox mr-1" type="checkbox" name="calvin-klien" id="calvin-klien" onChange={(e) => dispatch({type:"FILTER_BY_BRAND", payload: "calvin klien"})}/>Calvin Klien</label>
                    <br />
                    <label htmlFor="gucci">
                    <input className="checkbox mr-1" type="checkbox" name="gucci" id="gucci" onChange={(e) => dispatch({type:"FILTER_BY_BRAND", payload: "gucci"})}/>Gucci</label>
                    <br />
                    <label htmlFor="nykaa">
                    <input className="checkbox mr-1" type="checkbox" name="nykaa" id="nykaa" onChange={(e) => dispatch({type:"FILTER_BY_BRAND", payload: "nykaa"})}/>Nykaa</label>
                    <br />
                    <label htmlFor="engage">
                    <input className="checkbox mr-1" type="checkbox" name="engage" id="engage" onChange={(e) => dispatch({type:"FILTER_BY_BRAND", payload: "engage"})}/>Engage</label>
                    <br />
                    <label htmlFor="out-of-stock">
                    <input className="checkbox mr-1" type="checkbox" name="out-of-stock" id="out-of-stock" onChange={(e) => dispatch({type:"OUT_OF_STOCK", payload: "out-of-stock"})}/>Include Out of Stock</label>
                    <br />
                </div>

            </form>
        </div>
    
    )
}

export { Sidebar }