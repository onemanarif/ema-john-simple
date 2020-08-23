import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
   // const totalPrice = cart.reduce((total, product) => total + product.price , 0);
   let totalPrice = 0;
   for(let i = 0; i< cart.length; i++)
   {
        const product = cart[i];
        totalPrice = totalPrice + product.price;
    }
    let shipping = 12.99;
    if(totalPrice == 0){
    shipping = 0;   
    }
    else if(totalPrice > 500){
       shipping = 0;
       }
    else if(totalPrice<500 || totalPrice> 100){
        shipping = 10;
    }
    return (
        <div>
            <h4>This is cart</h4>
            <p>Items Ordered:{cart.length}</p>
            <p>Total price: {totalPrice}</p>
            <p>Shipping Price: {shipping}</p>
            <p>5% Tax: {totalPrice/100*5}</p>
            <p>Grand Total: {totalPrice + shipping +(totalPrice/100*5)}</p>
        </div>
    );
};

export default Cart;