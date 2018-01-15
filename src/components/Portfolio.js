import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'
import Masonry from 'react-masonry-css'
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import MdLink from 'react-icons/lib/md/link'
import MdKeyboardControl from 'react-icons/lib/md/keyboard-control'

const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 2,
    500: 1
  }
const PortfolioWrapper = styled.div`
    text-align: left;
`

const PortfolioGrid = styled.div`
    display: block;
`

const MasonryGrid = styled(Masonry)`
    && {
        width: 100%;
        display: flex;
        margin: 0;
        padding: 0;
        .grid_column {
            border-right: 24px solid transparent;
            background-clip: padding-box;
            &:nth-child(even) {
                border-right: 0;
            }
        }
    }
`
const MetaButton = styled.a`
    color: #fff;
    font-size: 32px;
    cursor: pointer;
    padding: 8px;
`
const PortfolioDesc = styled.div`
    color: #fff;
    position: absolute;
    bottom: 0px;
    transform: translate(0px, 200px);
    left: 0;
    width: 100%;
    text-align: center;
    transition: all 600ms ease-in;
    ul {
        padding: 0;
        margin: 0;
        li {
            display: inline-block;
            padding-right: 8px;
            color: #fff;
            background: none;
        }
    }
`

const PortfolioItem = styled(Paper)`
&& {
    background: #fff;
    margin-bottom: 24px;
    transition: all 300ms ease-in;
    img {
        width: 100%;
        margin-bottom: -10px;
        margin-left: 0px;
        transition: all 500ms ease-in;
    }
    position: relative;
    overflow: hidden;
    span {
        transition: all 500ms ease-in;
    }
    &:hover {
        span {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            z-index: 99;
            background: rgba(0,0,0,0.5);
        }
        img {
            transform: rotate(-3deg) scale(1.1)
        }
        ${PortfolioDesc} {
            transform: translate(0px, -50px);
            z-index: 999;
        }
    }
    
}
`

const MoreButton = styled(Button)`
    && {
        margin: 36px auto;
        display: flex;
    }
`

class Portfolio extends Component {
    render() {
        return(
            <Grid>
                <Row>
                    <Col xs={12} md={10} mdOffset={1}>
                        <PortfolioWrapper>
                            <h1>Portfolio</h1>
                            <PortfolioGrid>
                                <MasonryGrid
                                    breakpointCols={breakpointColumnsObj}
                                    columnClassName="grid_column"
                                >
                                    <PortfolioItem>
                                        <span />
                                        <PortfolioDesc>
                                            <h2>Forest Nation</h2>
                                            <ul>
                                                <li>
                                                    <MetaButton aria-label="More">
                                                        <MdKeyboardControl />
                                                    </MetaButton>
                                                </li>
                                                <li>
                                                    <MetaButton aria-label="Link">
                                                        <MdLink />
                                                    </MetaButton>
                                                </li>
                                            </ul>
                                        </PortfolioDesc>
                                        <img src="https://madhavpoudel.com.np/wp-content/uploads/2017/02/forestnation-600x450.jpg" />
                                    </PortfolioItem>
                                    <PortfolioItem>
                                        <span />
                                        <PortfolioDesc>
                                            <h2>Agronization</h2>
                                            <ul>
                                                <li>
                                                    <MetaButton aria-label="More">
                                                        <MdKeyboardControl />
                                                    </MetaButton>
                                                </li>
                                                <li>
                                                    <MetaButton aria-label="Link">
                                                        <MdLink />
                                                    </MetaButton>
                                                </li>
                                            </ul>
                                        </PortfolioDesc>
                                        <img src="https://madhavpoudel.com.np/wp-content/uploads/2017/02/agronization-600x450.jpg" />
                                    </PortfolioItem>
                                    <PortfolioItem>
                                        <span />
                                        <PortfolioDesc>
                                            <h2>Tech News PWA</h2>
                                            <ul>
                                                <li>
                                                    <MetaButton aria-label="More">
                                                        <MdKeyboardControl />
                                                    </MetaButton>
                                                </li>
                                                <li>
                                                    <MetaButton aria-label="Link">
                                                        <MdLink />
                                                    </MetaButton>
                                                </li>
                                            </ul>
                                        </PortfolioDesc>
                                        <img src="https://madhavpoudel.com.np/wp-content/uploads/2017/02/FireShot-Capture-5-Tech-News-https___tnpwa.herokuapp.com_-600x432.png" />
                                    </PortfolioItem>
                                    <PortfolioItem>
                                        <span />
                                        <PortfolioDesc>
                                            <h2>Forest Nation</h2>
                                            <ul>
                                                <li>
                                                    <MetaButton aria-label="More">
                                                        <MdKeyboardControl />
                                                    </MetaButton>
                                                </li>
                                                <li>
                                                    <MetaButton aria-label="Link">
                                                        <MdLink />
                                                    </MetaButton>
                                                </li>
                                            </ul>
                                        </PortfolioDesc>
                                        <img src="https://madhavpoudel.com.np/wp-content/uploads/2017/02/forestnation-600x450.jpg" />
                                    </PortfolioItem>
                                </MasonryGrid>
                                <MoreButton>See More Projects</MoreButton>
                            </PortfolioGrid>
                        </PortfolioWrapper>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Portfolio