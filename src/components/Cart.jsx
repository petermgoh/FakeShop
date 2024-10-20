import { useCart } from "../context/CartContext"

export default function Cart() {
    const {cartItems, removeItemFromCart} = useCart()
    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {cartItems.map((item) => 
                <h3 key={item.id}>{item.title}</h3>
                )}
            </ul>
        </div>
    )
}
