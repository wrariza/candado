import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: rgb(226,87, 76);
    font-size: 18px;
    color: rgb(255, 255, 255);
    height: 50px; 
    text-align: center; 
    width: 250px;
    border: none;
    cursor: pointer;
`

function ButtomPrimary (props) {
    return(
        <Button>
            {props.name}
        </Button>
    )
}

export default ButtomPrimary;