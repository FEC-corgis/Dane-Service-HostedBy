import React from 'react';
import LeftMiddleBox from './styled-components/LeftMiddleBox';
import DuringYourStay from './components/during-your-stay/DuringYourStay';
import Superhost from './components/superhost/Superhost';
import About from './components/about/About';

const LeftMiddle = (props) => (
    <LeftMiddleBox>
        <About about={props.about} />
        <DuringYourStay duringYourStay={props.duringYourStay} />
        {props.isSuperhost && <Superhost name={props.name} />}
    </LeftMiddleBox>
);

export default LeftMiddle;
