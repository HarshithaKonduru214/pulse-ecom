import { Nav, Footer, SocialMedia, Address, Horizontal, Price } from "../../components"
import "../../components/style.css"
import "./cart.css"

const Cart = () => {
    return (
        <div>
            <Nav />
            <main class="cart-container">
                <div class="cart-content flex-column">
                    <Address />
                    <div class="cart-products">
                        <Horizontal />     
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