import "./catalog.css";
import Product from "../components/product";
import { useEffect, useState } from "react";
import DataService from "../sources/dataServices";

function Catalog() {
    const [products, setProducts] = useState([]);
    const [category,setCategory] = useState([]);
    const [prodsToDisplay, setprodsToDisplay] = useState ([]);


    useEffect(function () {
        console.log("component loaded");
        loadCatalog();
    },[]);


async function loadCatalog() {
        let service = new DataService();
        let prods = await service.getProducts();
        console.log(prods);
        setProducts(prods);
        let cats = [ "Fried Food", "Sandwich", "Main Entree"];
        setCategory(cats);
        setprodsToDisplay(prods);
    }

   

    function filter(category){
        console.log(category)

        let list = [];

        for (let i = 0; i < products.length; i++){
            let prod = products[i];
            if (prod.category === category)
        {
            list.push(prod);
        }
        }
        console.log(list);
        setprodsToDisplay(list);
    }

    function clearFilters(){
        setprodsToDisplay(products);

    }

    return (
        <div className="catalog page">
        <h1> Look at our menu</h1>

        <br/>
    
        <button onClick={clearFilters} className="btn btn-sm btn-dark btn-filter">All</button>
        {category.map(c => <button onClick={() =>filter(c)} key={c} className = "btn btn-sm btn-primary btn-filter"> {c} </button>)}
        <br/>
        <br/>
        {prodsToDisplay.map(p =>  
        < Product key={p._id} data={p} /> )}
        </div>
    );
}

export default Catalog;
