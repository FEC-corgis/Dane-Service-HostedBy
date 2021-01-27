import React from 'react';
import RightBox from './styled-components/RightBox';
import ResponseInfo from './response-info/ResponseInfo';
import ContactButton from './contact/ContactButton';

const Right = () => {
    return (
        <RightBox>
            <ResponseInfo />
            <ContactButton />
        </RightBox>
    );
};

export default Right;
