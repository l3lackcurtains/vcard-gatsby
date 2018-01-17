import React, { Component } from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Button from 'material-ui/Button';
import FaGithub from 'react-icons/lib/fa/github'
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaFacebook from 'react-icons/lib/fa/facebook'
import FaMedium from 'react-icons/lib/fa/medium'
import FaInstagram from 'react-icons/lib/fa/instagram'
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Paper from 'material-ui/Paper'

const HeaderWrapper = styled.div`
    background: #1A237E;
    height: 500px;
`
const NavBar = styled.div`
    background-color: #fff;
    border: 1px solid #f8f8f8;
    border-radius: 2px;
    margin-top: -2px;
    padding: 8px 0;
    display: flex;
    justify-content: space-between;

`
const MenuHammerIcon = styled(IconButton) `
    &&{
        font-size: 24px;
    }
`

const Logo = styled.div`
    display: flex;
    h5 {
        font-size: 18px;
        margin: 15px 8px;
    }
`
const MenuBar = styled.ul`
    margin: 0;
    padding: 0;
    align-self: flex-end;
    li {
        display: inline-block;
        padding: 0 10px;
        padding-top: 10px;
    }
`

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Grid>
                    <Row>
                        <Col xs={12} md={10} mdOffset={1}>
                            <NavBar>
                                <Logo>
                                    <MenuHammerIcon aria-label="Menu">
                                        <MenuIcon />
                                    </MenuHammerIcon>
                                    <h5>Madhav</h5>
                                </Logo>
                                <MenuBar>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Skills</a></li>
                                    <li><a href="">Portfolio</a></li>
                                </MenuBar>
                            </NavBar>
                        </Col>
                    </Row>
                </Grid>
            </HeaderWrapper>
        )
    }
}

export default Header