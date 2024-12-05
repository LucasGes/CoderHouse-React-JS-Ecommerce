import { createContext, useState } from "react";

export const CartContext = createContext()


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {


        setCart((cart) => {
            const existingProduct = cart.find((item) => item.id === product.id);
        
            if (existingProduct) {
              
              return cart.map((item) =>
                item.id === product.id
                  ? { ...item, cantidad: item.cantidad + product.cantidad }
                  : item
              );
            }
            return ([...cart, product]);
          });

    }

       
    const itemsInCart = () => {
        return cart.reduce((acc, product) => acc + product.cantidad, 0);
    }
    
    const totalCart = () => {
        return cart.reduce((acc, product) => acc + (product.cantidad * product.Precio), 0);
    }
    
    const removeItem = (id) => {
        setCart(cart.filter(product => product.id !== id));
    }
    
    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
            itemsInCart,
            totalCart,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
    )
}