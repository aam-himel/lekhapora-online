import React from 'react';
import './Cart.css';


const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    let originalPrice = 0;
    for(let i=0; i<cart.length; i++){
        // Original price calculation
        originalPrice = originalPrice + cart[i].originalPrice;
        originalPrice = Number(originalPrice.toFixed(2));
        //Total price calculation
        total = total + cart[i].price;
        total = Number(total.toFixed(2));

        console.log(total, originalPrice);
    }
    
    return(
        <div className="cart">
            <h1 className="cart-title">Cart</h1>
            <div className="cart-body">
                {
                    <h3> {cart.length} Courses in Cart</h3>
                }
                {
                cart.length > 0 && <div>
                        
                        <h5>Total:</h5>
                        <h5><span className="current-price">${total}</span></h5>
                        <p>Original Price: <span className="original-price"><del>${originalPrice}</del></span></p>
                        <a href="/" className="btn btn-danger">Checkout</a>
                    </div>
                }
                 
            </div>
        </div>
    );
}

export default Cart;
