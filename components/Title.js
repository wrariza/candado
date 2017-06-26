import React from 'react';
import styled from 'styled-components';


const T = styled.h1`
  font-family: 'Frijole', 'cursive';
  font-size: 5rem;
  width: 150px;
`;

function Title (props) {
    return(
       <T>
         { props.name }
       </T>
    )
}

export default Title;