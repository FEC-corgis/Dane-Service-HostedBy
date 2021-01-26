import React from 'react';
import Badge from './styled-components/Badge';
import LeftTopContainer from './styled-components/LeftTopContainer';
import SuperHost from '../../../../../icons/SuperHost';
import { MdVerifiedUser } from 'react-icons/md';
import { AiTwotoneStar } from 'react-icons/ai';

const LeftTop = ({ host }) => (
    <LeftTopContainer>
        {host.numberOfReviews && (
            <Badge first={true}>
                <AiTwotoneStar className={'icon'} />
                <span>{host.numberOfReviews} Reviews</span>
            </Badge>
        )}
        {host.identityVerified && (
            <Badge>
                <MdVerifiedUser className={'icon'} />
                <span>Identity verified</span>
            </Badge>
        )}
        {host.isSuperhost && (
            <Badge>
                <SuperHost />
                <span>Superhost</span>
            </Badge>
        )}
    </LeftTopContainer>
);

export default LeftTop;
