import React from 'react';
import ResponseInfoItem from './styled-components/ResponseInfoItem';
import ResponseInfoContainer from './styled-components/ResponseInfoContainer';

const ResponseInfo = ({ time, rate }) => (
    <ResponseInfoContainer>
        <ResponseInfoItem className={'font'}>
            Response rate: {rate}%
        </ResponseInfoItem>
        <ResponseInfoItem className={'font'}>
            Response time: {time < 24 ? 'within a day' : 'within a week'}
        </ResponseInfoItem>
    </ResponseInfoContainer>
);

export default ResponseInfo;
