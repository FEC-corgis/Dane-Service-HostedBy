import React from 'react';
import LeftBox from './styled-components/LeftBox';
import LeftTop from './components/left-top/LeftTop';
import LeftMiddle from './components/left-middle/LeftMiddle';
import { useSelector } from 'react-redux';
import { getHostedByState } from '../../../../redux/slices/hostedBy/hostedBySlice';

const Left = () => {
    const { host, duringYourStay } = useSelector(getHostedByState);
    return (
        <LeftBox>
            <LeftTop host={host} />
            <LeftMiddle
                about={host.about}
                duringYourStay={duringYourStay}
                isSuperhost={host.isSuperhost}
                name={host.name}
            />
        </LeftBox>
    );
};

export default Left;
