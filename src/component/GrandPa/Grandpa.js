import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './GrandPa.css'
/* 
context api 
1.call createContext with a default value
2.set a variable of the context with upper case ;
3. make sure you export the context to use it in other places
4. wrap your child content using RingContext.Provider 
5. Provide a Value
6. con consume the context from child component
7. useContext hook and you will need to pass the contextName
8. Make sure i  take notes 

*/
export const RingContext = createContext('Ring');
const Grandpa = () => {

    const [house, setHouse] = useState(1);
    const ornaments = 'diamond ring';
    const handleBuyAHouse = () => {
        const newHouseCout = house + 1;
        setHouse(newHouseCout)
    }

    return (
        <RingContext.Provider value={house}>
            <div className=''>
                <h4>dadar bari: {house}</h4>
                <button onClick={handleBuyAHouse}>buy a house </button>
                <div className='grandPa'>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </div>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;



