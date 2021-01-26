import React from 'react';
import First from './styled-components/First';
import Next from './styled-components/Next';
import LeftTopContainer from './styled-components/LeftTopContainer';
import { MdVerifiedUser } from 'react-icons/md';
import { AiTwotoneStar } from 'react-icons/ai';

const LeftTop = ({ host }) => (
    <LeftTopContainer>
        {host.numberOfReviews && (
            <First>
                <AiTwotoneStar className={'icon'} />
                <span>{host.numberOfReviews} Reviews</span>
            </First>
        )}
        {host.identityVerified && (
            <Next>
                <MdVerifiedUser className={'icon'} />
                <span>Identity verified</span>
            </Next>
        )}
        {host.isSuperhost && (
            <Next>
                <MdVerifiedUser className={'icon'} />
                <span>Superhost</span>
            </Next>
        )}
    </LeftTopContainer>
);

export default LeftTop;
