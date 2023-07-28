import "./productInCart.css";
import DataContext from "../store/dataContext";
import { useEffect, useState, useContext } from "react";

function ProductInCart(props){
    const { cart, setCart } = useContext(DataContext);

    const [quantity, setQuantity] = useState(props.data.quantity);

    useEffect(() => {
    setQuantity(props.data.quantity);
    }, [props.data.quantity]);

    function onQuantityChange(qty) {
    setQuantity(qty);
    updateTotal(qty);
    }

    function updateTotal(qty) {
        const updatedCart = cart.map((item) =>
          item.id === props.data.id ? { ...item, quantity: qty, total: item.price * qty } : item
        );
        setCart(updatedCart);
    }
    
        function getTotal() {
            let total = 0;
            const tax =0.035;
        
            for (let i = 0; i < cart.length; i++) {
            const prod = cart[i];
            total += (prod.price  * prod.quantity) * (1 + tax) ;
            
        }
        return total;
    }

    return(
        <div className="prod-cart">

            <img alt=" " src={"/images/" + props.data.image}></img> 
            <div>
            <h4> Order: {props.data.title}</h4>
            <p> Category: {props.data.category}</p>
            </div>
            <label>Price:  {props.data.price.toFixed(2)} </label> 
            <label>Quantity: {props.data.quantity} </label>
            <label>Total: {getTotal().toFixed(2)} </label>
            </div>
    )
}

export default ProductInCart;