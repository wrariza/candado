import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row , Col} from 'react-styled-flexboxgrid';
import Logo from './Title.js';
import SearcherImport from './Search';

var background = 'url(../static/fondo.png)';

const GridHero = styled(Grid)`
   height: 700px;
   background-image: ${background};
   color: white;
`

const Searcher = styled(SearcherImport)`
    top: 10px;
`

class Hero extends Component {
    render() {
        return(
            <GridHero>
                <Row>
                    <Col xsOffset={2} xs={10}>
                        <Logo/>
                    </Col>
                </Row>
                <Row>
                    <Col className="searcher" xsOffset={2} xs={8} >
                        <Searcher/>
                    </Col>
                </Row>
            </GridHero>
        )
    }
}

export default Hero;
