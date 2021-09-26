import React from 'react';
import './Cart.css';
const Cart = (props) => {

    const {cart} = props;

    let total = 0;
    for( const speaker of cart) {
        total +=speaker.price;
    }



    return (
      <div className="col-md-3">
        <div className="cart">
          <div className="single-speaker">
            <h4 className="header-title">Shopping Cart</h4>
            <hr />
            <p className="m-0">
              <b>Speaker Added: </b>
              <span>{props.cart.length}</span>
            </p>
            <p className="mb-3">
              <b>Total Cost: </b>$<span>{total.toFixed(2)}</span>
            </p>

            <ul className="list-unstyled">
                {
                    cart.map(speaker => <li className="speaker-list">
                        <img src={speaker.picture} alt={speaker.name} />
                        {speaker.name}</li>)
                }
            </ul>

            <hr />
            <div className="d-flex flex-row-reverse">
              <button className="btn btn-sm btn-danger">
                Proced to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Cart;