import React from 'react';
import styled from 'styled-components';

import { Container } from './gallery/Gallery';

const Landing = () => {
    return (
        <Container landing>
            <Welcome>Welcome to your personal motorcycle encyclopedia, Pop!</Welcome>
        </Container>
    );
};

const Welcome = styled.h2`
    font-weight: 200;
    color: white;
`;

export default Landing;