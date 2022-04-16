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
        case "ADD_TO_CART" : { 
            if (state.cart.filter((item) => item._id === payload._id ).length) {
                return state
            } else {
                return {...state, cart: [{ ...payload, quantity: 1 }, ...state.cart] }
            }
            
        }
        case "INCREASE_QUANTITY" :  return {...state, cart: state.cart.map((item) => item._id === payload._id ? {...item, quantity: item.quantity + 1} : item)}
        case "DECREASE_QUANTITY" : return {...state, cart: state.cart.map((item) => item._id === payload._id ? {...item, quantity: item.quantity - 1} : item)}
        case "REMOVE_FROM_CART" : return {...state, cart: state.cart.filter((item) => item._id !== payload._id)}
        case "ADD_TO_WISHLIST" : { 
            if (state.wishlist.filter((item) => item._id === payload._id ).length) {
                return state
            } else {
                return {...state, wishlist: [{ ...payload, quantity: 1 }, ...state.wishlist] }
            }
            
        }
        case "REMOVE_FROM_WISHLIST" : return {...state, wishlist: state.wishlist.filter((item) => item._id !== payload._id)}
        case "RESET" : return {...state, 
            sortBy: "", 
            gender: null, 
            brandFilter: {}, 
            priceFilter: 10000, 
            inStock: true
        }
        default: return state;
    }
}

export { productReducer };