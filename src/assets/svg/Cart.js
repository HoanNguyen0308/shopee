import React from 'react';

const Cart = () => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 26.6 25.6" 
            height="26"
            width="26"
            fill="#fff"
            className="shopee-svg-icon navbar__link-icon icon-shopping-cart-2"
            >
            <polyline
                points="2 1.7 5.5 1.7 9.6 18.3 21.2 18.3 24.6 6.1 7 6.1" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeMiterlimit="10" 
                strokeWidth="2.5"
            >
            </polyline>
            <circle cx="10.7" cy="23" r="2.2" stroke="none"></circle>
            <circle cx="19.7" cy="23" r="2.2" stroke="none"></circle>
        </svg>
    );
};

export default Cart;