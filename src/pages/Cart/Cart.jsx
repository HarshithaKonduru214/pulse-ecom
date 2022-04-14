import { Nav, Footer, SocialMedia, Address, Horizontal, Price } from "../../components"
import "../../components/style.css"
import { useProducts } from "../../Context/ProductContext"

import "./cart.css"

const Cart = () => {
    const { cart } = useProducts();

    return (
        <div>
            <Nav />
            <main class="cart-container">
                <div class="cart-content flex-column">
                    <Address />
                    <div class="cart-products">
                    { cart && cart.map(({ brand, category, discount, gender, inStock, name, price, rating, _id, img, alt, quantity}) => {
                        return (
                        <Horizontal brand={brand} category={category} discount={discount} gender={gender} _id={_id} inStock={inStock} name={name} price={price} rating={rating} img={img} alt={alt} quantity={quantity} />
                    )})}     
                    </div>
                </div>
                <div class="cart-sidebar flex-column">
                    <Price />
                </div>
            </main>
            <SocialMedia />
            <Footer /> 

        </div>
    )
}

export { Cart }