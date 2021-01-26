import React from 'react';
import MainContainer from './styled-components/MainContainer';
import Border from './styled-components/Border';

const Main = ({ children }) => (
    <MainContainer>
        <Border>{children}</Border>
    </MainContainer>
);

export default Main;
