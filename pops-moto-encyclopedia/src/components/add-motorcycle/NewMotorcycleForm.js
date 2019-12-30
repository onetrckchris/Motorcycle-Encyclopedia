import React from 'react';
import styled, { css } from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

import { Container } from '../gallery/Gallery';
import { Cycle } from '../Navbar';
import { Icon } from '../Navmenu';

const NewMotorcycleForm = () => {
    return (
        <Container>
            <StyledForm>
                <FormDirections>Add a new motorcycle to the En<Cycle>cycle</Cycle>pedia!</FormDirections>
                <RowContainer>
                    <StyledField year type="number" name="year" placeholder="Year" autoComplete="Off" />
                    <StyledField make type="text" name="make" placeholder="Make" autoComplete="Off" />
                    <StyledField model type="text" name="model" placeholder="Model" autoComplete="Off" />
                    <Button type="submit"><Icon submitIcon className="fas fa-plus"></Icon></Button>
                </RowContainer>
            </StyledForm>
        </Container>
    );
};

const FormDirections = styled.h3`
    color: white;
    font-weight: 300;
`;

const RowContainer = styled.div`
    display: flex;
`;

const StyledForm = styled(Form)`
    height: calc(100vh - 58px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const StyledField = styled(Field)`
    border: 1px solid white;
    border-radius: 3px;
    background-color: #770707;
    color: white;
    margin: 0 5px;
    padding: 7px;
    font-size: 0.9rem;
    outline: none;

    &::placeholder {
        color: white;
    }

    ${props =>
        props.year && css`
            width: 70px;
        `}

    ${props =>
        props.make && css`
            width: 120px;
        `}

    ${props =>
        props.model && css`
            width: 250px;
        `}
`;

const Button = styled.button`
    border: 1px solid #770707;
    margin: 0 5px;
    border-radius: 3px;
    padding: 7px;
    font-size: 0.9rem;
    background-color: white;
    color: #770707;
    cursor: pointer;
`;

export default withFormik({
    mapPropsToValues() {
        return {
            year: '',
            make: '',
            model: ''
        };
    },
    validationSchema: Yup.object().shape({
        model: Yup.string().required()
    }),
    handleSubmit(values, formikBag) {
        formikBag.resetForm();
        console.log(values);
    }
})(NewMotorcycleForm);