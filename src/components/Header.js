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
import Paper from 'material-ui/Paper';

const HeaderWrapper = styled.div`
    background: #1A237E;
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

const IntroWrapper = styled(Paper) `
    && {
        margin-top: 25%;
        margin-bottom: -200px;
        background-color: #fff;
    }
`

const AvatarWrapper = styled.div`
    height: 200px;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    margin-bottom: 30px;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
`

const AvatarImg = styled.div`
    height: 200px;
    width: 200px;
    background-image: url('https://c2.staticflickr.com/6/5489/9046708422_a91c1678d5_z.jpg');
    background-size: cover;
    background-position: center center;
`

const SocialIcons = styled.ul`
    margin: 0;
    padding: 0;
    text-align: center;
    li {
        display: inline-block;
        padding: 4px;
    }
`

const Name = styled.h2`
    margin-top: 40px;
    text-align: left;
    margin-bottom: 10px;
    margin-left: 20px;
`

const Prof = styled.p`
    text-align: left;
    text-transform: uppercase;
    color: #888;
    margin-left: 20px;
`
const Intro = styled.ul`
    list-style: none;
    text-align: left;
    margin-left: 20px;
    li {
        display: flex;
        strong {
            width: 150px;
        }
    }
`

const Actions = styled.ul`
    margin-left: 20px;
    text-align: left;
    li {
        display: inline-block;
        padding-right: 12px;
    }
    
`
const CVButton = styled(Button) `
    && {
        background: #fff;
        font-size: 16px;
    }
`

const ContactButton = styled(Button) `
    && {
        background: #1A237E;
        font-size: 16px;
        color: #fff;
    }
`

class Header extends Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;
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
                <Grid>
                    <Row>
                        <Col xs={12} md={10} mdOffset={1}>
                            <IntroWrapper>
                                <Row>
                                    <Col xs={12} md={4}>
                                        <AvatarWrapper>
                                            <AvatarImg />
                                        </AvatarWrapper>
                                        <SocialIcons>
                                            <li>
                                                <Button fab mini color="primary" aria-label="github">
                                                    <FaGithub />
                                                </Button>
                                            </li>
                                            <li>
                                                <Button fab mini color="primary" aria-label="facebook">
                                                    <FaFacebook />
                                                </Button>
                                            </li>
                                            <li>
                                                <Button fab mini color="primary" aria-label="twitter">
                                                    <FaTwitter />
                                                </Button>
                                            </li>
                                            <li>
                                                <Button fab mini color="primary" aria-label="medium">
                                                    <FaMedium />
                                                </Button>
                                            </li>
                                            <li>
                                                <Button fab mini color="primary" aria-label="instagram">
                                                    <FaInstagram />
                                                </Button>
                                            </li>
                                        </SocialIcons>
                                    </Col>
                                    <Col xs={12} md={8}>
                                        <Name>Madhav Poudel</Name>
                                        <Prof>Full stack web developer</Prof>
                                        <Intro>
                                            <li><strong>Age: </strong><p>23</p></li>
                                            <li><strong>Address: </strong><p>Pokhara, Nepal</p></li>
                                            <li><strong>Email: </strong><p>l3lackcurtains@gmail.com</p></li>
                                            <li><strong>Freelance: </strong><p>Available</p></li>
                                        </Intro>
                                        <Actions>
                                            <li>
                                                <CVButton raised>
                                                    Download CV
                                                </CVButton>
                                            </li>
                                            <li>
                                                <ContactButton raised>
                                                    Contact Me
                                                </ContactButton>
                                            </li>
                                        </Actions>
                                    </Col>
                                </Row>
                            </IntroWrapper>
                        </Col>
                    </Row>
                </Grid>
            </HeaderWrapper>
        )
    }
}

export default Header