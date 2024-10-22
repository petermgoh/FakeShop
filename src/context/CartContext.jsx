import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export function useCart() {
    return useContext(CartContext)
}

export function CartProvider({children}) {
    const [cartItems, setCartItems] = useState([])

    const addItemToCart = (item) => {
        setCartItems((prev) => {
            const existingItem = prev.find((cartItem) => cartItem.id === item.id)

            if (existingItem) {
                return prev.map((cartItem) => cartItem.id === item.id ? {...cartItem, count: cartItem.count + 1} : cartItem)
            } else {
                return [...prev, {...item, count: 1}]
            }
        })
        alert(`${item.title} Added To Cart`)
    }

    const removeItemFromCart = (itemId) => {
        setCartItems((prev) => prev.filter((item) => item.id !== itemId))
    }

    let cartSize = 0
    cartItems.forEach((cartItem) => cartSize += cartItem.count)

    return (
        <CartContext.Provider value = {{ cartItems, cartSize, addItemToCart, removeItemFromCart }}>
            {children}
        </CartContext.Provider>
    )
}