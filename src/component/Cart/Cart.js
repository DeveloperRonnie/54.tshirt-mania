import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {

    //conditional rendering options 
    // 1.Element Variable
    // 2.ternary operator
    // 3. and operator (shorthand)
    // 4. or operator
    let command;
    if (cart.length === 0) {
        command = <p>please add at least one item</p>
    } else if (cart.length === 1) {
        command = <p>Add one item more</p>
    } else {
        command = <p>thanks for adding </p>
    }
    return (
        <div>
            <h1>item{cart.length}</h1>

            {
                cart.map(tShirt => <p>{
                    tShirt.name}
                    <button onClick={() => { handleRemoveFromCart(tShirt) }}>X</button>

                </p>)
            }
            {command}
            {
                cart.length !== 4 ? <p>keep adding</p> : <button>remove all</button>
            }
        </div>
    );
};

export default Cart;