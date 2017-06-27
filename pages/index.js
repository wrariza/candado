import Router from 'next/router';
import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Grid } from 'react-styled-flexboxgrid';
import { defaultTheme } from '../lib/theme';
import Hero from '../components/Hero';
import Logo from '../components/Logo';
import Footer from '../components/Footer'
import Loading from '../components/Loading'

class Home extends Component {
    state = {
        loading: false,
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
    render(){
        return (
           <ThemeProvider theme={defaultTheme}>
                <div>
                    <Hero onSubmit={this.handleSubmit} >
                        <Logo/>
                    </Hero>
                    <Grid>
                        {
                            this.state.loading &&
                            <Loading />
                        }
                        <Footer/>
                    </Grid>
                </div>
            </ThemeProvider>
        );
        
    }
}

export default Home;