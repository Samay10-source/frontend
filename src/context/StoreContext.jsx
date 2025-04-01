import { createContext, useEffect, useState } from "react";
import { food_list as foodListData, menu_list } from "../assets/assets";
import axios from "axios";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    
    // Replace URL with direct import from assets
    // const url = "http://localhost:4000"
    const [foodList, setFoodList] = useState([]); // Renamed to avoid conflict
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("")
    const deliveryCharge = 50;

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        // Remove API call since we're using assets
        // if (token) {
        //     await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
        // }
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        // Remove API call since we're using assets
        // if (token) {
        //     await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
        // }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            try {
              if (cartItems[item] > 0) {
                let itemInfo = foodList.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }  
            } catch (error) {
                
            }
            
        }
        return totalAmount;
    }

    const fetchFoodList = async () => {
        // Replace API call with direct data from assets
        setFoodList(foodListData);
    }

    const loadCartData = async (token) => {
        // Replace API call with empty cart since we're using assets
        setCartItems({});
    }

    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                await loadCartData({ token: localStorage.getItem("token") })
            }
        }
        loadData()
    }, [])

    const contextValue = {
        food_list: foodList, // Map the renamed state to the original exported name
        menu_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        token,
        setToken,
        loadCartData,
        setCartItems,
        deliveryCharge
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;