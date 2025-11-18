import { createContext } from "react";
import { food_list } from "../assets/assets";
import { useState, useEffect } from "react";

export const Storecontext = createContext(null);

const StorecontextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }
    useEffect(() => {
        console.log(cartItems);
    }, [cartItems])

    const contextvalue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    };

    return (
        <Storecontext.Provider value={contextvalue}>
            {props.children}
        </Storecontext.Provider>
    );
};

export default StorecontextProvider;
