import React from 'react';
import ResponseInfoItem from './styled-components/ResponseInfoItem';
import ResponseInfoContainer from './styled-components/ResponseInfoContainer';

const ResponseInfo = () => {
    return (
        <ResponseInfoContainer>
            <ResponseInfoItem className={'font'}>
                Response rate: 100%
            </ResponseInfoItem>
            <ResponseInfoItem className={'font'}>
                Response time: within an hour
            </ResponseInfoItem>
        </ResponseInfoContainer>
    );
};

export default ResponseInfo;
