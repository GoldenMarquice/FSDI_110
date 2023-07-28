import { Link } from "react-router-dom";
import React from "react";
import "./cart.css";
import { useContext } from "react";
import DataContext from "../store/dataContext";
import ProductInCart from "../components/productInCart";

function Cart(){

    const cart = useContext(DataContext).cart;

    
    function getNumProducts(){
        let sum = 0;
        
        /// create
        /// travel the cart with a for
        // get every product, from the product get the quantity
        // add the quantity to the sum

        /*
 * Create ProductInCart component
 * map the cart into your component, send the data
 * the component should receieve the data and display the information
 * 
 */

        for (let i=0; i<cart.length; i++){
            const prod = cart[i];
            sum += prod.quantity;
        }
        return sum;
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

function getTotalWithoutTax() {
    let totalWithoutTax = 0;

    for (let i = 0; i < cart.length; i++) {
    const prod = cart[i];
      totalWithoutTax += prod.price * prod.quantity;
    }
    return totalWithoutTax;
}


    return (
    
        <div className="cart page">
            <br/>
            <h1>Here are the entrees in your Cart</h1>
            <h5> You have {getNumProducts()} entrees in your Cart</h5>
            
            <div className="parent">
                
                <section className="sec-prods">
                    <div className="form">
                    <output onChange="" name="code"  type="text" placeholder="Total Number of Entrees">  <h1>List of entrees selected </h1>
{cart.map(prod => <ProductInCart key={prod.id} data={prod} />)} </output></div>
                    

                </section>



                <section className="sec-coupons">
                <div className="form">
                    <h3>Coupon Codes</h3>

                                <div className="mt-3">
                                <label className="form-label"> Total Number of Entrees </label>
                                <output onChange="" name="code" className="form-control" type="text" placeholder="Total Number of Entrees">  {getNumProducts()} </output>
                                </div>

                                <div className="mt-3">
                                <label className="form-label"> Total Without Tax </label>
                                <output onChange="" name="code" className="form-control" type="text" placeholder="Total Without Tax">  ${getTotalWithoutTax().toFixed(2)} </output>
                                </div>

                                <div className="mt-3">
                                <label className="form-label"> Total Tax </label>
                                <output onChange="" name="code" className="form-control" type="text" placeholder="Total Tax"> ${(getTotal() - getTotalWithoutTax()).toFixed(2)}  </output>
                                </div>
                    
                                <div className="mt-3">
                                <label className="form-label"> Total Cost </label>
                                <output onChange="" name="code" className="form-control" type="text" placeholder="Cost of All Entrees">  ${getTotal().toFixed(2)} </output>
                                </div>

                                <div className="mt-3">
                                <label className="form-label"> Coupon Code </label>
                                <input onChange="" name="code" className="form-control" type="text" placeholder="Coupon Code" />{" "}
                                </div>

                                <div className="mt-3">
                                <label className="form-label"> Discount </label>
                                <input onChange="" name="dicount" className="form-control" type="number" placeholder="Discount Code" />{" "}
                                </div>
                                    <br />
                                    <div className="mt-4">
                        <button className="btn btn-dark" onClick="">
                            Submit Your Order 
                        </button>
                        </div>
                </div>
                <h3 className="mt-4"> You have {cart.length} coupons</h3>
                
                </section>
            </div>
            </div>
    )
}

export default Cart;