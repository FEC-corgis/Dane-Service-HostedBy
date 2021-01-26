import React, { useEffect } from 'react';
import Main from './components/main/Main';
import Top from './components/top/Top';
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
            <Top name={'Mark'} joinDate={'2021-01-25T08:00:00.000Z'} />
        </Main>
    );
};

export default App;
