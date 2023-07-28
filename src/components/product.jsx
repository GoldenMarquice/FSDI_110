import { useEffect, useState, useContext } from "react";
import "./product.css";
import QuantityPicker from "./quantityPicker"
import DataContext from "../store/dataContext";

function Product (props){

const [quantity, setQuantity] = useState (1);
const addToCart = useContext(DataContext).addToCart



useEffect(function(){
        console.log("hello im a product");  },[]);

function onQuantityChange(qty)
        {
            console.log(qty);
            setQuantity(qty);

        }

function handleAddProduct(){
    console.log("adding food to cart");

    let productForCart = {...props.data, quantity: quantity};

    addToCart(productForCart);
}

    return (

        <div className="product-container">
        <img alt=" " src={"/images/" + props.data.image}/> 
        <h5> {props.data.title}</h5>
        <div className="prices">
            <label htmlFor="">Price:$  {props.data.price.toFixed(2)}</label>
            <label htmlFor="">Total:$ {(props.data.price * quantity).toFixed(2)} </label>
            </div>
            <QuantityPicker onChange={onQuantityChange}/>
            <br />
            <button className="btn btn-sm btn-success p-1 w-0.1" onClick={handleAddProduct}>Add to Cart</button>
        </div>
    )
}

export default Product;