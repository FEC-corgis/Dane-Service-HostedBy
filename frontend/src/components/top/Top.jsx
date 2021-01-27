import React from 'react';
// import Avatar from './components/avatar/styled-components/AvatarImg';
import Avatar from './components/avatar/Avatar';
import JoinDate from './styled-components/JoinDate';
import HostedBy from './styled-components/HostedBy';
import TopContainer from './styled-components/TopContainer';
// import AvatarMedal from './components/avatar/styled-components/AvatarMedal';
// import medal from './medal.svg';
import { convertDate } from '../../constants/functions/convertDate';

const Top = ({ host }) => (
    <TopContainer>
        {/* <div style={{ position: 'relative' }}>
            <Avatar src={host.avatar} alt="host" />
            <AvatarMedal src={medal} alt="medal" />
        </div> */}
        <Avatar avatar={host.avatar} />
        <div>
            <HostedBy>Hosted by {host.name}</HostedBy>
            <JoinDate>Joined in {convertDate(host.joinedOn)}</JoinDate>
        </div>
    </TopContainer>
);

export default Top;
