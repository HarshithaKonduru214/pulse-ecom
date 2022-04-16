import { useContext, createContext, useReducer } from "react";
import { brands } from "../data"
import { productReducer } from "../Reducer";
import { sortData, filterGender, filterInStock, filteredBrands, filterPrice  } from "../utils";


const productContext = createContext(null);

const ProductContext = ({children}) => {
    const brandInitialState = {"dior": false, "davidoff": false, "versace": false, "calvin klien": false, "gucci": false, "nykaa": false, "engage": false}
    const [{ products, sortBy, gender, brandFilter, priceFilter, inStock, cart }, dispatch] = useReducer(productReducer, {
        products: [],
        sortBy: "",
        gender: null,
        brandFilter: brandInitialState,
        priceFilter: 10000,
        inStock: true,
        cart: [],
    })

    const getTotalCartPrice = (cart) => {
        return cart.reduce(
            (total, { price, quantity }) => total + price * quantity,
            0
        );
    };

    const getDiscountCartPrice = (cart) => {
        return cart.reduce(
            (total, { price, discount, quantity }) => total + (price - (discount*price/100)) * quantity,
            0
        );
    };

    const objFilter = (obj) => {
        let newObj = {}
        for (const [key, value] of Object.entries(obj)) {
            if (value) {
                newObj = { ...newObj, [key]: value }
            }
        }
        return newObj
    }
    
    const brandsToBeFiltered = objFilter(brandFilter)
    const filteredStock = filterInStock(products, inStock)
    const sortedData = sortData(filteredStock, sortBy);
    const filteredGender = filterGender(sortedData,gender);
    const filteredPrice = filterPrice(filteredGender, priceFilter);
    const filterData = filteredBrands(filteredPrice, brandsToBeFiltered);
    const totalPrice = getTotalCartPrice(cart);
    const discountPrice = getDiscountCartPrice(cart)
    return (
        <productContext.Provider value={{ dispatch, filterData, cart, totalPrice, discountPrice }}>
            {children}
        </productContext.Provider>
    )
}

const useProducts = () => useContext(productContext);

export { ProductContext, useProducts }