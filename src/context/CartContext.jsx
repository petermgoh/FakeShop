import { createContext, useContext, useMemo, useState } from "react";

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
    }

    // removes item matching itemId from cart
    const removeItemFromCart = (itemId) => {
        setCartItems((prev) => prev.filter((item) => item.id !== itemId))
    }

    // checkout function clears cart and alerts
    const checkout = () => {
        if (cartSize === 0) {
            alert('Cart is Empty')
            return
        }
        setCartItems([])
        alert(`Thanks for $${totalPrice}, sucker!`)
    }

    // Memoized cart size
    const cartSize = useMemo(() => 
        cartItems.reduce((total, item) => total + item.count, 0),
        [cartItems]
    );

    // Memoized total price
    const totalPrice = useMemo(() =>
        cartItems.reduce((total, item) => total + item.price * item.count, 0).toFixed(2),
        [cartItems]
    );

    const value = {
        cartItems,
        cartSize,
        totalPrice,
        addItemToCart,
        removeItemFromCart,
        checkout,
    };

    return (
        <CartContext.Provider value = {value}>
            {children}
        </CartContext.Provider>
    )
}