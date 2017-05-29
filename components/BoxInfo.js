import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row } from 'react-styled-flexboxgrid';
import ButtonPrimary from './Button.js'

const Container = styled.section`
    width: 516px; 
    height: 500px;
    font-family: 'Lato', sans-serif;
    top: 130px;
    position: relative;
`
const styleTitle = `
    h1{
        font-size: 3rem;
        margin: 0px;
    }
    h2{
        font-size: 1.8rem;
        margin-top: 10px;
        margin-bottom: 50px;
    }
`

const ContainerT = styled.section`
    ${styleTitle}
    padding-left: 20px;
`

const Line = styled.div`
    background-color: red;
    width: 4px;
    height: 139px;
    position: absolute;
    margin-top: 12px;
}
`

const Info = styled.p`
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 40px;
`

const Button = styled(ButtonPrimary)`
    position: relative;
    top: 50px;
`

function BoxInfo () {
    return(
        <Container>
            <Line/>
            <ContainerT>
                <h1>
                     Clean & Beautiful   landing page template
                </h1>
                <h2>
                    with ultimate design & features.
                </h2>
            </ContainerT>
            <Info>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh neque, convallis ut interdum a, consequat sit amet mauris. Vivamus sed tincidunt enim.
            </Info>
            <Button
                name="View Detail"
            />
        </Container>
    )
}

export default BoxInfo;