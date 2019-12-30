import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const Navmenu = () => {
    return (
        <Nav>
            <Icon leftArrow className="fas fa-chevron-left"></Icon>
            <NavItem to="/gallery">
                <Icon className="fas fa-motorcycle"></Icon>
                Gallery
            </NavItem>
            <NavItem to="/add-motorcycle">
                <Icon className="fas fa-plus"></Icon>
                Add Motorcycle
            </NavItem>
        </Nav>
    );
};

export const Icon = styled.i`
    margin-right: 15px;

    ${props =>
        props.submitIcon && css`
            color: #770707;
            margin: 0 3px;
        `}

    ${props =>
        props.leftArrow && css`
            color: white;
            margin: 0 0 5px auto;
            cursor: pointer;
        `}
`;

const Nav = styled.nav`
    background-color: #770707;
    padding: 15px;
    height: calc(100vh - 58px); 
    min-width: 180px;

    display: flex;
    flex-direction: column;
`;

const NavItem = styled(Link)`
    text-decoration: none;
    color: white;
    font-weight: 300;
    margin: 0;
    margin: 10px 0;
`;

export default Navmenu;