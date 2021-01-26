import React from 'react';
import { convertDate } from '../../constants/functions/convertDate';

const Top = (props) => (
    <div>
        <h1>Hosted by {props.name}</h1>
        <p>Joined in {convertDate(props.joinDate)}</p>
    </div>
);

export default Top;
