import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row , Col} from 'react-styled-flexboxgrid';
import Logo from './Title.js';
import Searcher from './Search';

var wallpaper = 'url(../static/seguros.jpg)';

const Background = styled.div`
   background-image: ${wallpaper};
`
const Gradient = styled.div`
  background: linear-gradient(to left, rgba(56, 56, 56, 0.5), rgba(64, 60, 64, 0.5));
`;

const GridHero = styled(Grid)`
   height: 25rem;
   color: white;
   text-aligh: center;
`

class Hero extends Component {
    render() {
        return(
            <Background>
                <Gradient>
                    <GridHero>
                        <Row>
                            <Col xsOffset={2} xs={5}>
                                <Logo 
                                    name="Candado"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="searcher" xsOffset={2} xs={8} >
                                <Searcher/>
                            </Col>
                        </Row>
                    </GridHero>
                </Gradient>
            </Background>
        )
    }
}

export default Hero;
