import React from 'react';
import DuringYourStay from './components/during-your-stay/DuringYourStay';
import Superhost from './components/superhost/Superhost';
import About from './components/about/About';

const LeftMiddle = (props) => (
    <React.Fragment>
        <About about={props.about} />
        <DuringYourStay duringYourStay={props.duringYourStay} />
        {props.isSuperhost && <Superhost name={props.name} />}
    </React.Fragment>
);

export default LeftMiddle;
