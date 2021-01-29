import React from 'react';
import LeftBottomBox from './styled-components/LeftBottomBox';
import DuringYourStay from './components/during-your-stay/DuringYourStay';
import Superhost from './components/superhost/Superhost';
import About from './components/about/About';

const LeftMiddle = (props) => (
    <LeftBottomBox>
        <About about={props.about} />
        <DuringYourStay duringYourStay={props.duringYourStay} />
        {props.isSuperhost && <Superhost name={props.name} />}
    </LeftBottomBox>
);

export default LeftMiddle;
