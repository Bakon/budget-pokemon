import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { colors } from '../css-util';
import Character from './player';

const Main = (): ReactElement => (
    <StyledContainer>
        <Character />
    </StyledContainer>
);

export default Main;

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: ${colors.dark};
`;
