import { Link } from "react-router-dom";
import "./navBar.css";
import { useContext } from "react";
import DataContext from "../store/dataContext";

function NavBar() {

    const cart = useContext(DataContext).cart;

    function getNumProducts(){
        let sum = 0;

        /// create
        /// travel the cart with a for
        // get every product, from the product get the quantity
        // add the quantity to the sum

        for (let i=0; i< cart.length; i++){
            const prod = cart[i];
            sum += prod.quantity;
        }

        return sum;
    }

    return (
        <div className="navbar">
            <Link to="/home"> Home </Link>
            <Link to="/catalog"> Catalog </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact Us </Link>
            <Link to="/admin"> Admin Page </Link>

            <form role="search" className="navbar">
        <input type="text" placeholder="Search" aria-label="Search" className="form-control me-2" />
            </form>
            <Link className="btn btn-outline-light" to="/cart"  >
                {getNumProducts()} 
                {" "} Cart
            </Link>
        </div>
    );
}

export default NavBar;
