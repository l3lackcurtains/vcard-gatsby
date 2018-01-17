import React, { Component } from 'react'
import styled from 'styled-components'
// #E74C3C
const CustomH1 = styled.h1`
    text-transform: uppercase;
    color: #2C3E50;
    position: relative;
    padding-bottom: 5px;
    span {
        height: 4px;
        border-radius: 3px;
        background: #E74C3C;
        position: absolute;
        bottom: 8px;
        left: 0;
        width: 100px;
    }
`

const Title = ({ children }) => {
    return (
        <CustomH1><h1>{children}</h1><span /></CustomH1>
    )
}

export default Title