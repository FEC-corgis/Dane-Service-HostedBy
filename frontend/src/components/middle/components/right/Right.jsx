import React from 'react';
import RightBox from './styled-components/RightBox';
import ResponseInfo from './response-info/ResponseInfo';
import ContactButton from './contact/ContactButton';
import Disclaimer from './disclaimer/Disclaimer';

const Right = () => {
    return (
        <RightBox>
            <ResponseInfo />
            <ContactButton />
            <Disclaimer />
        </RightBox>
    );
};

export default Right;
