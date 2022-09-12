import React from 'react'
import { observer } from 'mobx-react'
import styled from "styled-components";
import bg from './bg.jpg';
import Start from './Start';


const Title = styled.p`
        font-size: 70px;
        letter-spacing: 40px;
        line-height: 90px;
        margin-bottom: 0.5em;
        color:#fff;
    `

const SubTitle = styled.p`
        font-size: 30px;
        line-height: 65px;
        letter-spacing: 10px;
        color: #9e9e9e;
    `

const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center; 
        height: calc(100vh - 102px);
        justify-content: center;
         
        background-repeat: no-repeat;
        background-size:100%;
        background-attachment: fixed;
        background-size: cover;

        
    `
const CancelStyle = styled.div`
    filter:alpha(opacity=90);-moz-opacity:0.9; -khtml-opacity: 0.9;opacity: 0.9;
    `

const Welcome = observer(() => {

    let sectionStyle = {
        backgroundImage: `url(${bg})`
    };

    return (
        <CancelStyle>
            <Container style={sectionStyle}>
                <Title >ImageHost
                </Title>
                <SubTitle>一个简单的图床</SubTitle>
                <Start />
            </Container>
        </CancelStyle>
    )
})

export default Welcome;
