import React from 'react';
import LeftBox from './styled-components/LeftBox';
import LeftTop from './components/left-top/LeftTop';
import { useSelector } from 'react-redux';
import { getHostedByState } from '../../../../redux/slices/hostedBy/hostedBySlice';

const Left = () => {
    const { host } = useSelector(getHostedByState);
    return (
        <LeftBox>
            <LeftTop host={host} />
        </LeftBox>
    );
};

export default Left;
