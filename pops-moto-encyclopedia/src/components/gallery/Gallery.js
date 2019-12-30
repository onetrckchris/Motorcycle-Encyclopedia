import React from 'react';
import styled, { css } from 'styled-components';

const Gallery = () => {
    return (
        <Container>
            This is the gallery
        </Container>
    );
};

export const Container = styled.div`
    background-color: rgba(153, 16, 16, 0.9);
    height: calc(100vh - 58px);
    width: 100%;

    ${props =>
        props.landing && css`
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        `}
`;

export default Gallery;