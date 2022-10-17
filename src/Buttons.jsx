import React from 'react';
import { useDispatch } from 'react-redux';

const Buttons = () => { 
    const dispatch = useDispatch()

    const handleInc = () => {
        dispatch({type: 'plus'})
    }

    const handleDic = () => {
        dispatch({type: 'minus'})
    }

    return (
        <div>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDic}>-</button>
        </div>
    );
};

export default Buttons;