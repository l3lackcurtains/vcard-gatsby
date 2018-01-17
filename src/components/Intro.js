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
import Paper from 'material-ui/Paper'
import ReactHtmlParser from 'react-html-parser'

const IntroWrapper = styled(Paper) `
    && {
        margin-top: -250px;
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
const Introduce = styled.ul`
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
        &:hover {
            background: #fff;
        }
    }
`

const ContactButton = styled(Button) `
    && {
        background: #E74C3C;
        font-size: 16px;
        color: #fff;
        &:hover {
            background: #E74C3C;
        }
    }
`
const AboutMe = styled.div`
    padding-top: 80px;
    padding-bottom: 20px;
    text-align: left;
`

class Intro extends Component {
    render() {
        const { about, social } = this.props
        const ab = about.edges[0]
        const sc = social.edges[0]
        return(
            <div>
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
                                        <Name>{ab.node.frontmatter.name}</Name>
                                        <Prof>{ab.node.frontmatter.role}</Prof>
                                        <Introduce>
                                            <li><strong>Age: </strong><p>{ab.node.frontmatter.age}</p></li>
                                            <li><strong>Address: </strong><p>{ab.node.frontmatter.address}</p></li>
                                            <li><strong>Email: </strong><p>{ab.node.frontmatter.email}</p></li>
                                            <li><strong>Freelance: </strong><p>{ab.node.frontmatter.freelance}</p></li>
                                        </Introduce>
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
                <Grid>
                    <Row>
                        <Col xs={12} md={10} mdOffset={1}>
                            <AboutMe>
                                {ReactHtmlParser(ab.node.html)}
                            </AboutMe>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }

}

export default Intro