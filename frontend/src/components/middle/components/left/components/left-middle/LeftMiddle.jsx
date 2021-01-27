import React from 'react';
import About from './styled-components/About';
import ReadMore from './components/read-more/ReadMore';
import LeftMiddleBox from './styled-components/LeftMiddleBox';

const LeftMiddle = () => (
    <LeftMiddleBox>
        <About className={'font'}>
            We're a new company with a fresh outlook on property management. We
            utilize automation and the power of technology alongside world class
            customer service to deliver the best possible experience for our
            guests and owners.
        </About>
        <ReadMore />
    </LeftMiddleBox>
);

export default LeftMiddle;
