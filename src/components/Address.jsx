import "./style.css";

const Address = () => {
    return (
        <div class="cart-address flex-row justify-content-between p-2">
            <div class="cart-address-left">
                <div class="cart-address-name">Deliver To: <strong>Elena, 560024</strong></div>
                <div class="cart-address-det gray-text">3473 Willis Avenue, New Smyrna Beach, Florida</div>
            </div>
            <div class="cart-address-right">
                <button class="secondary-button-outlined button">CHANGE ADDRESS</button>
            </div>
        </div>
    )
}

export { Address }