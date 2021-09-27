import React from 'react';
import Name from '../Name/Name';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    // const { name } = props.charecter; 

    // total power count 
    const totalReducer = (preValue, currentValue) => preValue + currentValue.value;
    const total = cart.reduce(totalReducer, 0);

    return (
        <div className="p-3 shadow-lg">
            <h5><i className="fas fa-user"></i> Members Added: {cart.length}</h5>
            <p className="fw-bold">Total Superpower Limit: {total}</p>

            <div className="">
                <h5>Team Member </h5>
                {
                    cart.map(char => <Name
                        key={char.id}
                        char={char}
                    ></Name>)
                }

            </div>
        </div>
    );
};

export default Cart;