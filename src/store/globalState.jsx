import { useState } from "react";
import DataContext from "./dataContext";

function GlobalState(props){
const [cart, setCart] = useState ([]);
const [user, setUser] = useState ({id: 12, name: "Marquice"});

function addToCart(product){

    console.log("Fn from Global State");
    let copy = [...cart];

    let found = false;

    for (let i=0; i<cart.length; i++){
        let productInCart = copy[i];
        if (productInCart._id == product._id){
            productInCart += product.quantity;
            found = true;
        }
    }
    
    if (!found) {
    copy.push(product);
    }

    setCart(copy);
}

function removeFromCart() {}


    return(
        <DataContext.Provider value = {{ 
            cart: cart, 
            user: user,
            addToCart: addToCart,
            removeFromCart: removeFromCart
            }}>
            
            {props.children}
        </DataContext.Provider>
    )
}

export default GlobalState;