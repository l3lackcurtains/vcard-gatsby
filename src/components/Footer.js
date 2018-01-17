import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'

const FooterWrapper = styled.div`
    margin-top: 80px;
    margin-bottom: 40px;
    text-align: center;
    p {
        margin: 4px 0;
    }
    span {
        color: #888;
        font-size: 0.9em;
    }
`
class Footer extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12} md={10} mdOffset={1}>
                        <FooterWrapper>
                            <p>Thank You For Visiting.</p>
                            <span>All Right Reserved. 2018</span>
                        </FooterWrapper>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Footer