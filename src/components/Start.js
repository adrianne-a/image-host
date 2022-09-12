import React from 'react'
import styled, { keyframes } from 'styled-components'
import { ArrowRightOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'


const beat = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
    `

const A = styled.a`
        display: inline-block;
        font-size: 20px;
        animation: ${beat} 2000ms 700ms 2;
        transition: all 1s;
        :hover{
            transform: scale(1.1);
        }
    `

export default function Start() {


    const history = useHistory();
    const handleClick = () => {
        history.push('/login');
    }

    return (
        <>
            <A onClick={handleClick}><ArrowRightOutlined />&nbsp;&nbsp;&nbsp;开始使用</A>
        </>
    )
}
