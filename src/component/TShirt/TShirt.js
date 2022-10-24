import React from 'react';

import './TShirt.css';

const TShirt = ({ handleAddToCart, tShirt }) => {

    const { name, picture, price } = tShirt;
    return (
        <div className='tShirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>price: {price}$</p>
            <button onClick={() => handleAddToCart(tShirt)}>add to card</button>
        </div>
    );
};

export default TShirt;


