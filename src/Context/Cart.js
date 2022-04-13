import { createContext } from "react";

const CartContext = createContext(null);

const CartProvider = ({children}) => {
    return (
        <CartContext.Provider>{children}</CartContext.Provider>
    )
}

export { CartProvider }