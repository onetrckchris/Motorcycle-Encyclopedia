import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Nav>
            <Title to="/">En<Cycle>cycle</Cycle>pedia</Title>
        </Nav>
    );
};

const Nav = styled.nav`
    background-color: #b71c1c;
    padding: 15px;
    width: 100%;
`;

const Title = styled(Link)`
    font-size: 1.5rem;
    text-decoration: none;
    margin: 0;
    font-weight: 200;
    color: white;
`;

export const Cycle = styled.span`
    font-weight: 700;
    color: white;
`;

export default Navbar;