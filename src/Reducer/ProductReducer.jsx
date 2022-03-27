import { brands } from "../data"

const productReducer = (state, {type, payload}) => {
    switch(type) {
        case "FETCH_DATA": return {...state, products: payload}
        case "SORT": return {...state, sortBy: payload};
        case "FILTER_GENDER": return {...state, gender: payload }
        case "FILTER_BY_BRAND": return {...state, 
            brandFilter: {...state.brandFilter,[payload]: !state.brandFilter[payload]}
        }
        case "FILTER_BY_PRICE": return {...state, priceFilter: payload};
        case "OUT_OF_STOCK": return {...state, inStock: !state.inStock }
        case "RESET" : return {...state, 
            sortBy: "", 
            gender: null, 
            brandFilter: brands.reduce((acc,curr)=> (acc[curr]= false,acc),{}), 
            priceFilter: 10000, 
            inStock: true
        }
        default: return state;
    }
}

export { productReducer };