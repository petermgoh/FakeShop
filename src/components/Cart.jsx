import { useCart } from "../context/CartContext"
import CartCard from "./CartCard"

export default function Cart() {
    const {cartItems} = useCart()

    return (
        <div className='cart'>
            <h1>Cart</h1>
            <ul>
                {cartItems.map((item) => 
                <CartCard key={item.id} item={item}/>
                )}
            </ul>
        </div>
    )
}
