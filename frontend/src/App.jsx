import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { handleGetHostedByData } from './redux/slices/hostedBy/hostedBySlice';

const App = ({ match: { params } }) => {
    const dispatch = useDispatch();
    const { id } = params;

    useEffect(() => {
        dispatch(handleGetHostedByData(id));
    });
    return (
        <div>
            <h1>Hosted By Service</h1>
        </div>
    );
};

export default App;
