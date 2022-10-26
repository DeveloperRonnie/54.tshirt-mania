import React from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './GrandPa.css'

const Grandpa = () => {
    const house = 10;
    return (
        <div className='grandPa'>
            <Father house={house}></Father>
            <Uncle house={house}></Uncle>
            <Aunty house={house}></Aunty>
        </div>
    );
};

export default Grandpa;



