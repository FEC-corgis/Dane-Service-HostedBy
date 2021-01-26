import React, { useEffect } from 'react';
import Main from './components/main/Main';
import { useDispatch } from 'react-redux';
import { handleGetHostedByData } from './redux/slices/hostedBy/hostedBySlice';

const App = ({ match: { params } }) => {
    const dispatch = useDispatch();
    const { id } = params;

    useEffect(() => {
        dispatch(handleGetHostedByData(id));
    });
    return (
        <Main>
            <h1>Hosted By Service</h1>
        </Main>
    );
};

export default App;
