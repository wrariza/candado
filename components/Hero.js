import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row , Col} from 'react-styled-flexboxgrid';

import Logo from '../components/Logo.js';
import Searcher from './Search';

var wallpaper = 'url(../static/seguros.jpg)';

function setPadding(props) {
  if (props.sm) {
    return '2em 0';
  }
  return '100px 0 186px';
}

const Gradient = styled.div`
  background: linear-gradient(to left, rgba(56, 56, 56, 0.5), rgba(64, 60, 64, 0.5));
  padding: ${setPadding};
`;

const Background = styled.div`
   background-image: ${wallpaper};
   background-repeat: no-repeat;
   background-position: center center;
   background-size: 100% auto;
   @media (max-width: 1024px) {
    background: rgb(233, 131, 238);
   }
`

const GridHero = styled(Grid)`
   color: white;
   text-aligh: center;
`

function Hero(props){
    return(
        <Background>
            <Gradient>
                <GridHero>
                    {props.children}
                    <Searcher
                        onSubmit={props.onSubmit}
                    />
                </GridHero>
            </Gradient>
        </Background>
    )
}

export default Hero;
