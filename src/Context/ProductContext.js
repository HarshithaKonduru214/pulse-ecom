import { useContext, createContext, useReducer, useEffect, useState } from "react";

const productContext = createContext(null);

const ProductContext = ({children}) => {
    const productReducer = (state, {type, payload}) => {
        switch(type) {
            case "FETCH_DATA": return {...state, products: payload}
            case "SORT": return {...state, sortBy: payload};
            default: return state;
        }
    }

    const sortData = (sortBy) => {
        switch(sortBy) {
            case "HIGH_TO_LOW": return products.sort((a,b) => (b.price - (b.discount*b.price/100)) - (a.price - (a.discount*a.price/100)));
            case "LOW_TO_HIGH": return products.sort((a,b) => (a.price - (a.discount*a.price/100)) - (b.price - (b.discount*b.price/100)));
            case "DISCOUNT": return products.sort((a,b) => b.discount - a.discount)
            default: return products;
        }
    }

    const [{ products, sortBy }, dispatch] = useReducer(productReducer, {
        products: [],
        sortBy: ""
    })

    const sortedData = sortData(sortBy);
    console.log(sortedData)

    return (
    
        <productContext.Provider value={{ dispatch }}>
            {children}
        </productContext.Provider>
    )
}

const useProducts = () => useContext(productContext);

export { ProductContext, useProducts }
