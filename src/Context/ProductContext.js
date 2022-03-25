import { useContext, createContext, useReducer, useEffect, useState } from "react";
import axios from "axios";
const productContext = createContext(null);

const ProductContext = ({children}) => {

    const [productList, setProductList] = useState([])
    useEffect(() => {
        (async () => {
            const { data : { products }} = await axios.get("/api/products");
            setProductList(products)
        })();
    },[]);

    const productReducer = (state, {type, payload}) => {
        switch(type) {
            case "SORT": return {...state, sortBy: payload};
            default: return state;
        }
    }

    const [{data, sortBy}, dispatch] = useReducer(productReducer, {
        data: productList,
        sortBy: ""
    })
    return (
        <productContext.Provider value={ productList }>
            {children}
        </productContext.Provider>
    )
}

const useProducts = () => useContext(productContext);

export { ProductContext, useProducts }
