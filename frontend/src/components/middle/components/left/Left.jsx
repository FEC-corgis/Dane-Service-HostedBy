import React from 'react';
import LeftBox from './styled-components/LeftBox';
import LeftTop from './components/left-top/LeftTop';
import LeftMiddle from './components/left-middle/LeftMiddle';
import { useSelector } from 'react-redux';
import { getHostedByState } from '../../../../redux/slices/hostedBy/hostedBySlice';

const Left = () => {
    const { host } = useSelector(getHostedByState);
    return (
        <LeftBox>
            <LeftTop host={host} />
            <LeftMiddle />
        </LeftBox>
    );
};

export default Left;
