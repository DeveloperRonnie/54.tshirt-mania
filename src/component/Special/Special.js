import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/Grandpa'

const Special = ({ ornaments }) => {
    const ring = useContext(RingContext)

    return (
        <div>
            <h3>Special</h3>
            <p>{ring}</p>
        </div>
    );
};

export default Special;