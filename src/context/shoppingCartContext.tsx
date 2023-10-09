import { ReactNode, createContext, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseQuantity: (id: number) => void
    decreaseQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItem: CartItem[]
}
type CartItem = {
    id: number
    quantity: number
}
const ShoppingCartContext = createContext({} as ShoppingCartContext)



export function UseShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}:{children: ReactNode}) {
    const [isOpen, setIsOpen] = useState(false)
    const [cartItem, setCartItem] = useState<CartItem[]>([])

    const cartQuantity = cartItem.reduce((a, b) => b.quantity + a, 0)

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)
    function getItemQuantity(id:number) {
        return cartItem.find(item => item.id == id)?.quantity || 0
    }
    function increaseQuantity(id:number) {
        setCartItem(currentItem => {
            if (currentItem.find(item => item.id === id) == null) {
                return [...currentItem, {id, quantity: 1}]
            } else {
                return currentItem.map(item => {
                    if (item.id == id) {
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }
    function decreaseQuantity(id:number) {
        setCartItem(currentItem => {
            if (currentItem.find(item => item.id === id)?.quantity === 1) {
                return currentItem.filter(item => item.id != id)
            } else {
                return currentItem.map(item => {
                    if (item.id == id) {
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }
    function removeFromCart(id:number) {
        setCartItem(currentItem=> currentItem.filter(item => item.id !== id))
    }


    return <ShoppingCartContext.Provider value={{
        getItemQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        cartItem,
        cartQuantity,
        openCart,
        closeCart
    }}>
        {children}
        <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
}