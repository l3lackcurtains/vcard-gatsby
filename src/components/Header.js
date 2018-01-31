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
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemText } from 'material-ui/List'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const menuItems = [
    {
        name: 'Intro',
        slug: 'intro',
        link: null,
    },
    {
        name: 'Skills',
        slug: 'skills',
        link: null,
    },
    {
        name: 'Portfolio',
        slug: 'portfolio',
        link: null,
    },
    {
        name: 'Experiences',
        slug: 'experiences',
        link: null,
    },
    {
        name: 'Educations',
        slug: 'educations',
        link: null,
    },
    {
        name: 'Contact',
        slug: 'contact',
        link: null,
    },
    {
        name: 'Blog',
        slug: 'blog',
        link: '/blog',
    },
]

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
    z-index: 888;
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

const MobileMenu = styled.div`
    width: 150px;
    padding: 48px 0;
    z-index: 9999;
    li {
        padding: 8px 16px;
        a {
            background: none;
            text-decoration: none;
            text-shadow: none;
            &.active {
                color: #E74C3C;
            }
        }
    }
`

class Header extends Component {
    state = {
        sticky: false,
        activeArea: '',
        left: false,
    }

    toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        })
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
            <div>
                <HeaderWrapper>
                    <MenuWrapper>
                        <Grid>
                            <Row>
                                <Col xs={12} md={10} mdOffset={1}>
                                    <NavBar className={this.state.sticky ? 'sticky' : ''}>
                                        <Logo>
                                            <MenuHammerIcon aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
                                                <MenuIcon />
                                            </MenuHammerIcon>
                                            <h5><a href="/">Madhav Poudel</a></h5>
                                        </Logo>
                                        <MenuBar>
                                            {
                                            menuItems.map((m, i) => (
                                                <li>
                                                    {
                                                        !m.link ? 
                                                        <Link className={this.state.activeArea === m.slug ? 'active' : ''} to={m.slug} spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive}>
                                                            {m.name}
                                                        </Link> : <a href="">{m.name}</a>
                                                    }
                                                    
                                                </li>
                                            ))  
                                            }
                                        </MenuBar>
                                    </NavBar>
                                </Col>
                            </Row>
                        </Grid>
                    </MenuWrapper>
                </HeaderWrapper>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <MobileMenu>
                        <List>
                            {
                                menuItems.map((m, i) => (
                                    <ListItem button>
                                        {
                                            !m.link ? 
                                                <Link className={this.state.activeArea === m.slug ? 'active' : ''} to={m.slug} spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive}>
                                                    {m.name}
                                                </Link> : <a href="">{m.name}</a>
                                        }
                                    </ListItem>
                                ))
                            }
                            
                        </List>
                    </MobileMenu>
                </Drawer>
            </div>
        )
    }
}

export default Header