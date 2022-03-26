import { useContext, createContext, useReducer, useEffect, useState } from "react";

const productContext = createContext(null);

const ProductContext = ({children}) => {
    const productReducer = (state, {type, payload}) => {
        switch(type) {
            case "FETCH_DATA": return {...state, products: payload}
            case "SORT": return {...state, sortBy: payload};
            case "FILTER_GENDER": return {...state, gender: payload }
            default: return state;
        }
    }

    const sortData = (products, sortBy) => {
        switch(sortBy) {
            case "HIGH_TO_LOW": return products.sort((a,b) => (b.price - (b.discount*b.price/100)) - (a.price - (a.discount*a.price/100)));
            case "LOW_TO_HIGH": return products.sort((a,b) => (a.price - (a.discount*a.price/100)) - (b.price - (b.discount*b.price/100)));
            case "DISCOUNT": return products.sort((a,b) => b.discount - a.discount)
            default: return products;
        }
    }

    const filterData = (data, gender) => {
        switch(gender) {
            case "female": return data.filter((product) => product.gender === "women");
            case "male": return data.filter((product) => product.gender === "men");
            case "unisex": return data.filter((product) => product.gender === "unisex");
            default: return data
        }
    }

    const [{ products, sortBy, gender }, dispatch] = useReducer(productReducer, {
        products: [],
        sortBy: "",
        gender: null
    })

    const sortedData = sortData(products, sortBy);
    const filteredData = filterData(sortedData,gender);
    console.log(filteredData)

    return (
    
        <productContext.Provider value={{ dispatch, filteredData }}>
            {children}
        </productContext.Provider>
    )
}

const useProducts = () => useContext(productContext);

export { ProductContext, useProducts }
