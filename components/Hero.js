import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row , Col} from 'react-styled-flexboxgrid';
import BoxInfo from '../components/BoxInfo.js';
import Logo from './Title.js'

var background = 'url(../static/fondo.png)';

const GridHero = styled(Grid)`
   height: 700px;
   background-image: ${background};
   color: white;
`

class Hero extends Component {
    render() {
        return(
            <GridHero>
                <Row>
                    <Col xsOffset={2}>
                        <Logo/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} xsOffset={2}>
                        <BoxInfo/>
                    </Col>
                </Row>
            </GridHero>
        )
    }
}

export default Hero;
