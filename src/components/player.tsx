import React, { useState, useEffect, ReactElement } from 'react';
import styled from 'styled-components';
import { SIZE, DIRECTION, MAX_STEP } from '../constants';

const offset = { top: 0, left: 0 };
const Character = (): ReactElement => {
    const [step, setStep] = useState(0);
    const [facing, setFacing] = useState({ current: DIRECTION.Down, previous: DIRECTION.Down });

    useEffect(() => {
        window.addEventListener('keydown', ({ code }) => {
            if (!code.includes('Arrow')) return;

            setFacing((prev) => ({ current: DIRECTION[code.replace('Arrow', '')], previous: prev.current }));
        });
    }, []);

    useEffect(() => {
        setStep((prev) => (facing.current === facing.previous ? (prev < MAX_STEP - 1 ? prev + 1 : 0) : 0));
    }, [facing]);

    return <StyledCharacter offset={offset} facing={facing} step={step} />;
};
export default Character;

type StyleProps = {
    offset: { [key: string]: number };
    facing: { [key: string]: number };
    step: number;
};

const StyledCharacter = styled.div<StyleProps>`
    width: ${SIZE}px;
    height: ${SIZE}px;
    background: url('assets/sprites/trainers.png') -${({ offset, step }): number =>
            offset.left + step * SIZE}px -${({ offset, facing }): number => offset.top + facing.current}px;
`;
