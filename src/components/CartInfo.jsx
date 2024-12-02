import React, { createContext, useState, useContext } from "react";
import strawberrycake from "../assets/images/strawberrycake.png";
import yule_log from "../assets/images/yule_log.jpg";
import sourdough from "../assets/images/sourdough.jpeg";

const cartContext = createContext();

export function useCart() {
    return useContext(cartContext);
}

export default function CartInformation({ children }) {

    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Yule Log",
            price: 15.00,
            quantity: 1,
            amount: 15.00,
            image: yule_log,
            alttext: "yule log cake"
        },
        {
            id: 2,
            name: "Sourdough",
            price: 8.00,
            quantity: 2,
            amount: 16.00,
            image: sourdough,
            alttext: "sourdough"
        },
        {
            id: 3,
            name: "Strawberry Shortcake 8'",
            price: 48.00,
            quantity: 1,
            amount: 48.00,
            image: strawberrycake,
            alttext: "strawberrycake"
        }
    ]);

    function updateProductQuantity(id, newQuantity) {
        setProducts((items) => {
            if (newQuantity <= 0) {
                return items.filter(product => product.id !== id);
            }
            return items.map(product =>
                product.id === id ? {
                    ...product,
                    quantity: newQuantity,
                    amount: product.price * newQuantity
                } : product
            );
        });
    }

    function removeProduct(id) {
        setProducts((items) => items.filter(product => product.id !== id));
    }

    const subtotal = products.reduce((total, product) => total + product.amount, 0);
    const total = subtotal;

    return (
        <cartContext.Provider 
            value={{
                products,
                updateProductQuantity,
                removeProduct,
                subtotal,
                total,
            }}
        >
            {children}
        </cartContext.Provider>
    );
}
