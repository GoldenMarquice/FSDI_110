import {useState,useEffect} from 'react';
import React from "react";
import "./admin.css";
import DataService from '../sources/dataServices';

function Admin() {
    //products state function
    const [product, setProduct] = useState({});// object
    const [allProducts, setAllProducts] = useState([]);// list of objects
    
    //coupon state function
    const [coupon, setCoupon] = useState({});
    const [allCoupons, setAllCoupons] = useState([]);

    
    useEffect(function(){
        loadCoupon();
    },[]);

    async function loadCoupon() {
        let service = new DataService();
        let serverCoupons = await service.getCoupons();        
        setAllCoupons(serverCoupons);
    }
    
    function handleText(e){
        const value = e.target.value;
        const name = e.target.name
        
        // Copy. Modify Copy, Set Copy
        // spread operator JS
        let copy = {...product};
        copy[name] = value;
        setProduct(copy);
    }

    async function saveProduct(){

        // product -> obj
        // fix the Product's price to be a number
        let fixedProduct = {...product};
        fixedProduct.price = parseFloat(product.price);

        let service = new DataService();
        let response = await service.saveProduct(fixedProduct);

        console.log(fixedProduct, "fixedProduct");

        let copy = [...allProducts];
        copy.push(response);
        setAllProducts(copy);
        
    }

    function handleCoupon(e){
        const value = e.target.value;
        const name = e.target.name;

        let copy = {...coupon};
        copy[name] = value;
        setCoupon(copy);
    }

    async function saveCoupon(){
        console.log(coupon,"save Coupon")

        let fixedCoupon = {...coupon};
        fixedCoupon.discount = parseFloat(coupon.discount)

        let service = new DataService();
        let response = await service.saveCoupon(fixedCoupon);

        let copy = [...allCoupons];
        copy.push(response);
        setAllCoupons(copy);
    }

    return (
        <div className="admin page">
            <br />

            <h1>Good Eating</h1>
            <h2>Store Administration</h2>
            <br />
            <div className="parent">
                <section className="sec-prods">

                    <div className="form">
                    <h3>Products</h3>
                    
                            <div className="mt-3">
                                <label className="form-label"> Title: </label>
                                <input onChange={handleText} name="title" className="form-control" type="text" placeholder="Food Name" />{" "}
                                </div>

                                <div className="mt-3">
                                <label className="form-label">Image: </label>
                                <input onChange={handleText} name="image" className="form-control" type="text" placeholder=" Image" />
                                </div>

                            <div className="mt-3">
                                <label className="form-label">Price: </label>
                                <input onChange={handleText} name="price" className="form-control" type="number" placeholder=" Entree Cost" />
                                </div>

                            <div className="mt-3">
                                <label className="form-label" htmlFor="adminCategory"> Category:  </label> 
                                <input onChange={handleText} name="category" className="form-control" type="text" placeholder="Entree Category" />
                                </div>
                            <br />
                            <div className="mt-4 ">
                            <button className="btn btn-dark" onClick={saveProduct}>
                                Save Product
                            </button>
                            </div>
                    </div>

                    <h3 className='mt-4'> You have {allProducts.length} Products </h3>

                    <ul>
                    
                    <h3>{allProducts.map(prod => <h5> <li>{prod.title} - ${prod.price} </li></h5>)} </h3>
                    </ul>

                </section>

                <section className="sec-coupons">
                <div className="form">
                    <h3>Coupon Codes</h3>
                    
                                <div className="mt-3">
                                <label className="form-label"> Code: </label>
                                <input onChange={handleCoupon} name="code" className="form-control" type="text" placeholder="Coupon Name" />{" "}
                                </div>

                                <div className="mt-3">
                                <label className="form-label"> Discount: </label>
                                <input onChange={handleCoupon} name="discount" className="form-control" type="number" placeholder="Coupon Name" />{" "}
                                </div>
                                    <br />
                                    <div className="mt-4">
                        <button className="btn btn-dark" onClick={saveCoupon}>
                            Save Discount
                        </button>
                        </div>
                </div>

                <h3 className="mt-4"> You have {allCoupons.length} Coupons </h3>
                <ul>
                    {allCoupons.map(coup => <li key={coup._id}>{coup.code} - ${coup.discount} </li>)}
                </ul>

                </section>
            </div>
        </div>
    );
}

export default Admin;


/**
 * Create the form
 * Create a function to handle the change on controls
 * Created a state variable and build an object from the change function
 * Console log the object on the click of the save button
 * 
 * create an array to store the object and added the object from the save function
 * print the length of the array
 * Render info about the objects
 */