import React, { useEffect } from 'react';
import Main from './components/main/Main';
import Top from './components/top/Top';
import { useDispatch, useSelector } from 'react-redux';
import {
    getHostedByState,
    handleGetHostedByData,
} from './redux/slices/hostedBy/hostedBySlice';
import { convertDate } from './constants/functions/convertDate';

const App = ({ match: { params } }) => {
    const dispatch = useDispatch();
    const { host } = useSelector(getHostedByState);
    const { id } = params;

    useEffect(() => {
        dispatch(handleGetHostedByData(id));
    });
    return (
        host && (
            <Main>
                <Top name={host.name} joinDate={convertDate(host.joinedOn)} />
            </Main>
        )
    );
};

export default App;
