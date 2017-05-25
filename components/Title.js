import React from 'react';
import styled from 'styled-components';

const T = styled.h1`
  font-size: 1rem;
  color: white;
`;

function Title (props) {
    return(
       <T>
         { props.name }
       </T>
    )
}

export default Title;