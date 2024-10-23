import { useCart } from "../context/CartContext"
import CartCard from "./CartCard"

export default function Cart() {
    const { cartItems, checkout, totalPrice } = useCart()

    return (
        <div className='cart'>
            <h1>Cart</h1>
            {cartItems.length !== 0 && (<ul className='cart-container'>
                {cartItems.map((item) => 
                <CartCard key={item.id} item={item}/>
                )}
            </ul>)}
            <h3>Total Price: ${totalPrice}</h3>
            <button onClick={checkout}>Checkout</button>
        </div>
    )
}
