import React, { Component } from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'

const AboutMe = styled.div`
    margin-top: 200px;
    padding: 80px 0;
    text-align: left;
`

class Intro extends Component {
    render() {
        return(
            <Grid>
                <Row>
                    <Col xs={12} md={10} mdOffset={1}>
                        <AboutMe>
                            <p>Hello! I’m Madhav Poudel. Senior Web Developer specializing in front end development. Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including JavaScript, SQL, and C. Stng background in project management and customer relations.</p>
                        </AboutMe>
                    </Col>
                </Row>
            </Grid>
        )
    }

}

export default Intro