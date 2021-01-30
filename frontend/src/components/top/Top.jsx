import React from 'react';
import Avatar from './styled-components/Avatar';
import JoinDate from './styled-components/JoinDate';
import HostedBy from './styled-components/HostedBy';
import TopContainer from './styled-components/TopContainer';
import { convertDate } from '../../constants/functions/convertDate';

const Top = ({ host }) => (
    <TopContainer>
        <Avatar src={host.avatar} alt="host" />
        <div>
            <HostedBy>Hosted by {host.name}</HostedBy>
            <JoinDate>Joined in {convertDate(host.joinedOn)}</JoinDate>
        </div>
    </TopContainer>
);

export default Top;
