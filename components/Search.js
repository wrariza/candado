import React from 'react';
import styled from 'styled-components';

const DefaultStyles = `
    outline: 0;
    borde: none;
    border-radius: 4px;
`;

const Form = styled.form`
    display: flex;
    font-weight: bold;
    font-family: 'Josefin'
    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;

const InputSeacher = styled.input`
    flex: 1;
    margin-right: 1rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    ${DefaultStyles}
    @media (max-width: 1024px) {
        margin-right: 0;
    }
`;

const Button = styled.button`
    ${DefaultStyles}
    background-color: #2b3133;
    padding: 0.5rem 46px;
    text-transform: uppercase;
    font-weight: bold; 
    font-family: 'Josefin';
    color: white;
    box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.3);
    font-size: 1rem;
    cursor: pointer;
    @media (max-width: 1024px){
         margin-top: 1rem;
    }

    &:hover {
        background-color: white;
        color: #2b3133;
        transform: scale(1.1);
    }
`;

function Searcher(props) {
    return(
        <Form onSubmit={props.onSubmit}>
            <InputSeacher
                name="buscar"
                type="text"
                placeholder="ingrese sus palabras favoritas  y cree su candado"
            />
            <Button>Generar</Button>
        </Form>
    );
}

export default Searcher;