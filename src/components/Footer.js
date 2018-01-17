import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'
import { animateScroll as scroll } from 'react-scroll'
import Button from 'material-ui/Button'
import MdArrowUpward from 'react-icons/lib/md/arrow-upward'
const FooterWrapper = styled.div`
    margin-top: 80px;
    margin-bottom: 40px;
    padding: 16px 0;
    text-align: center;
    p {
        margin: 4px 0;
    }
    span {
        color: #888;
        font-size: 0.9em;
    }
    position: relative;
    overflow: hidden;
    .totop {
        position: fixed;
        bottom: 56px;
        right: 16px;
        z-index: 99999;
        span {
            color: #fff;
        }
    }
`
class Footer extends Component {
    state = {
        toTop: false,
    }
    componentDidMount = () => {
        window.addEventListener('scroll', () => {
            const position = window.scrollY
            if(position> 500) {
                this.setState({
                    toTop: true
                })
            } else {
                this.setState({
                    toTop: false
                })
            }
            
        })
    }
    scrollToTop = () => {
        scroll.scrollToTop()
    }
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12} md={10} mdOffset={1}>
                        <FooterWrapper>
                            <p>Thank You For Visiting.</p>
                            <span>All Right Reserved. 2018</span>
                            {
                            this.state.toTop ?
                                <Button className="totop" onClick={this.scrollToTop} fab color="primary" aria-label="totop">
                                    <MdArrowUpward />
                                </Button> : null
                            }
                        </FooterWrapper>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Footer