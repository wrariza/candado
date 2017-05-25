import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row } from 'react-styled-flexboxgrid';
import Title from './Title.js'

class BoxInfo extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
           <Title
             name="Template"
           /> 
        )
    }
}

export default BoxInfo;