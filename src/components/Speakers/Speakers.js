import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Speaker from '../Speaker/Speaker';

const Speakers = () => {
    const [speakers,setSpeakers] = useState([]);

    useEffect(()=>{
        fetch('./speakers.json')
        .then(response => response.json())
        .then(data => setSpeakers(data))
    },[]);



    // Code for Cart section
    const [cart,setCart] = useState([]);

    const manageAddToCart = (product) => {
        const newCart = [...cart,product];
        setCart(newCart);
    }


    return (
      <div>
        <section className="speakers-area">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <div className="row">
                  {speakers.map((speaker) => (
                    <Speaker key={speaker._id} manageAddToCart={manageAddToCart} speaker={speaker}></Speaker>
                  ))}
                </div>
              </div>
              {/* End of Content */}

              {/* Cart Section */}
              <Cart cart={cart}></Cart>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Speakers;