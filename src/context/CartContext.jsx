import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export function useCart() {
    return useContext(CartContext)
}

export function CartProvider({children}) {
    const [cartItems, setCartItems] = useState([])

    const addItemToCart = (item) => {
        setCartItems((prev) => [...prev, item])
        alert(`${item.title} Added To Cart`)
    }

    const removeItemFromCart = (itemId) => {
        setCartItems((prev) => prev.filter((item) => item.id !== itemId))
    }

    return (
        <CartContext.Provider value = {{ cartItems, addItemToCart, removeItemFromCart }}>
            {children}
        </CartContext.Provider>
    )
}