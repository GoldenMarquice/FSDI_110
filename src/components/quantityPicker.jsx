import "./quantityPicker.css";
import {useState} from "react"

function QuantityPicker (props){

    let [quantity, setQuantity] = useState(1);
    
    function increase()
{
    console.log("increasing quantity");
    let val = quantity + 1;
    setQuantity(val);
    props.onChange(val);// notify my parent that Im doing something
}


function decrease ()
{
    console.log("decrease quantity");
    if (quantity === 1) return;
    let val = quantity - 1;
    setQuantity(val);
    props.onChange(val);
}
    return(
        <div className="container-quantityPicker"> 
        <button disabled= {quantity === 1} className="btn btn-primary btn-sm" onClick={decrease}> - </button>
        <label>{quantity}</label>
        <button className="btn btn-primary btn-sm" onClick={increase}> + </button>
        </div>


    )
}

export default QuantityPicker;