import React, { Component } from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Button from 'material-ui/Button'
import FaGithub from 'react-icons/lib/fa/github'
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaFacebook from 'react-icons/lib/fa/facebook'
import FaMedium from 'react-icons/lib/fa/medium'
import FaInstagram from 'react-icons/lib/fa/instagram'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Paper from 'material-ui/Paper'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const HeaderWrapper = styled.div`
    background: #2C3E50;
    height: 500px;
    width: 100%;
`

const MenuWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99999;
`

const NavBar = styled(Paper)`
    && {
        background-color: transparent;
        border: 0;
        box-shadow: none;
        color: #fff;
        a, span {
            color: #fff
        }
        border-radius: 2px;
        margin-top: -2px;
        padding: 8px 0;
        display: flex;
        justify-content: space-between;
        transition: 400ms all ease-in;
        @media only screen and (max-width: 480px) {
           margin: 0 -16px;
        }
    }
    &.sticky {
        background-color: #fff;
        color: #333;
        box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
        a, span, h5 {
            color: #333;
        }
    }
`
const MenuHammerIcon = styled(IconButton) `
    &&{
        font-size: 24px;
    }
`

const Logo = styled.div`
    display: flex;
    h5 {
        color: #fff;
        font-size: 18px;
        margin: 15px 8px;
    }
`
const MenuBar = styled.ul`
    margin: 0 8px;
    padding: 0;
    align-self: flex-end;
    li {
        display: inline-block;
        padding: 0 10px;
        padding-top: 10px;
        cursor: pointer;
        a {
            text-decoration: none;
            &.active {
                color: #E74C3C;
            }
        }
    }
    @media only screen and (max-width: 1170px) { 
        display: none;
    }
`

class Header extends Component {
    state = {
        sticky: false,
        activeArea: '',
    }
    componentDidMount = () => {
        window.addEventListener('scroll', () => {
            const position = window.scrollY
            if(position> 5) {
                this.setState({
                    sticky: true
                })
            } else {
                this.setState({
                    sticky: false,
                    activeArea: '',
                })
            }
            
        })
    }
    handleSetActive = to => {
        this.setState({
            activeArea: to
        })
    }
    render() {
        return (
            <HeaderWrapper>
                <MenuWrapper>
                    <Grid>
                        <Row>
                            <Col xs={12} md={10} mdOffset={1}>
                                <NavBar className={this.state.sticky ? 'sticky' : ''}>
                                    <Logo>
                                        <MenuHammerIcon aria-label="Menu">
                                            <MenuIcon />
                                        </MenuHammerIcon>
                                        <h5><a href="/">Madhav Poudel</a></h5>
                                    </Logo>
                                    <MenuBar>
                                        <li>
                                            <Link className={this.state.activeArea === 'intro' ? 'active' : ''} to="intro" spy={true} smooth={true} offset={105} duration={500} onSetActive={this.handleSetActive}>
                                                Intro
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className={this.state.activeArea === 'skills' ? 'active' : ''} to="skills" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive}>
                                                Skills
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className={this.state.activeArea === 'portfolio' ? 'active' : ''} to="portfolio" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive}>
                                                Portfolio
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className={this.state.activeArea === 'experiences' ? 'active' : ''} to="experiences" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive}>
                                                Experiences
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className={this.state.activeArea === 'educations' ? 'active' : ''} to="educations" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive}>
                                                Educations
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className={this.state.activeArea === 'contact' ? 'active' : ''} to="contact" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive}>
                                                Contact
                                            </Link>
                                        </li>
                                        <li><a href="">Blog</a></li>
                                    </MenuBar>
                                </NavBar>
                            </Col>
                        </Row>
                    </Grid>
                </MenuWrapper>
            </HeaderWrapper>
        )
    }
}

export default Header