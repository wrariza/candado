import React from 'react';
import styled from 'styled-components';

var background = 'url(../static/title.png)';

const T = styled.h1`
  font-size: 1rem;
  height: 37px; 
  width: 150px;
  background-image: ${background};
  top: 70px;
  position: relative;
`;

function Title (props) {
    return(
       <T>
         { props.name }
       </T>
    )
}

export default Title;