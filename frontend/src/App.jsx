import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { handleGetHostedByData } from './redux/slices/hostedBy/hostedBySlice';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(handleGetHostedByData(1));
    });
    return (
        <div>
            <h1>Hosted By Service</h1>
        </div>
    );
};

export default App;
