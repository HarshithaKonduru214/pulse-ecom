import { useContext, createContext, useReducer } from "react";
import { brands } from "../data"
import { productReducer } from "../Reducer";
import { sortData, filterGender, filterInStock, filteredBrands, filterPrice  } from "../utils";

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

    console.log(products)

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