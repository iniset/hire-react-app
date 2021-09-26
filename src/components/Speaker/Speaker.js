import React from 'react';
import './Speaker.css';
const Speaker = (props) => {

    const { name, age, gender, phone, price, picture } = props.speaker;
    console.log(props);

    return (
      <div className="col-md-4 mb-3">
        {/* Single Content */}
        <div className="single-speaker">
          <div className="d-flex align-items-center">
            <div className="col-md-3 pe-2">
              <img src={picture} className="w-100" alt={name} />
            </div>
            <div className="col-md-9">
              <p className="m-0">
                <b>Name:</b> {name}
              </p>
              <p className="m-0">
                <b>Age:</b> {age}
              </p>
              <p className="m-0">
                <b>Gender:</b> {gender.toUpperCase()}
              </p>
              <p className="m-0">
                <b>Phone:</b> {phone}
              </p>
              <p className="m-0">
                <b>Price: </b>$ {price}
              </p>
            </div>
          </div>
          <hr />
          <div className="d-flex  align-items-center justify-content-between">
            <div className="social-icon">
              <span>
                <i className="fab fa-facebook-f"></i>
              </span>
              <span>
                <i className="fab fa-twitter"></i>
              </span>
              <span>
                <i className="fab fa-linkedin-in"></i>
              </span>
            </div>

            <button
              className="btn btn-sm btn-danger"
              onClick={() => props.manageAddToCart(props.speaker)}
            >
              <i className="far fa-cart-plus"></i> Add to cart
            </button>
          </div>
        </div>
        {/* End of Single Content */}
      </div>
    );
};

export default Speaker;