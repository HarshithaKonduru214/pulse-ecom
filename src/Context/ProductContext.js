import { useContext, createContext, useReducer } from "react";
import { brands } from "../data"
import { productReducer } from "../Reducer/ProductReducer";
import { sortData } from "../utils/sortData";
import { filterGender } from "../utils/filterGender"
import { filterInStock } from "../utils/filterInStock"
import { filteredBrands } from "../utils/filterBrands";
import { filterPrice } from "../utils/filterPrice";
const productContext = createContext(null);

const ProductContext = ({children}) => {
    const [{ products, sortBy, gender, brandFilter, priceFilter, inStock }, dispatch] = useReducer(productReducer, {
        products: [],
        sortBy: "",
        gender: null,
        brandFilter: brands.reduce((acc,curr)=> (acc[curr]= false,acc),{}),
        priceFilter: 10000,
        inStock: true
    })

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

    return (
    
        <productContext.Provider value={{ dispatch, filterData }}>
            {children}
        </productContext.Provider>
    )
}

const useProducts = () => useContext(productContext);

export { ProductContext, useProducts }
