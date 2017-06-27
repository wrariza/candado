import React, { Component, PropTypes } from 'react';
import Router from 'next/router';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import fetch from 'isomorphic-fetch';
import reducer from '../reducers/index';
import withRedux from 'next-redux-wrapper';
import { createStore } from 'redux';

import { defaultTheme } from '../lib/theme';
import Hero from '../components/Hero'
import Logo from '../components/Logo'

const data = {
  currentData: {},
}

const makeStore = function(initialState = data) {
  return createStore(reducer, initialState)
}

const Results = styled.section`
`; 

class ResultsPage extends Component {
 
    static async getInitialProps({ query }) {
        //const URL = `http://ascommontestsite.azurewebsites.net/v1/password/evalute/?text=${query.query}`
        const URL = `https://jsonplaceholder.typicode.com/posts`;
        const response = await fetch(URL, {
             method: 'GET'
        })
        const data = await response.json();
        
        console.log(data);
        return data
    }

    handleSubmit = (event) => {
        this.setState({
            loading: true,
        })
        event.preventDefault();
        const form = event.target;
        const value = form.elements.buscar.value;
        Router.push(`/results?query=${value}`);
    }

    render() {
        return(
             <ThemeProvider theme={defaultTheme}>
                <Results>
                    <Hero onSubmit={this.handleSubmit} sm>
                        <Logo />
                     </Hero>
                    <Grid>
                          { this.props[0].body }
                    </Grid>
                 </Results>
             </ThemeProvider>
        );
    }
}

ResultsPage.childContextTypes = {
  currentData: PropTypes.object
}

export default  withRedux(makeStore)(ResultsPage);