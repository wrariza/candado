import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row } from 'react-styled-flexboxgrid';
import BoxInfo from '../components/BoxInfo.js';

var background = 'rgb(53, 55, 76)';

const GridHero = styled(Grid)`
   height: 20rem;
   background-color: ${background};
`

class Hero extends Component {
    render() {
        return(
            <GridHero>
                <BoxInfo/>
            </GridHero>
        )
    }
}

export default Hero;
