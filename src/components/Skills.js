import React, { Component } from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Paper from 'material-ui/Paper';
import { LinearProgress } from 'material-ui/Progress';

const SkillsWrapper = styled.div`
    text-align: left;
    margin-bottom: 80px;
`

const ProfessionalSkills = styled(Paper)`
    && {
        background: #fff;
        padding: 24px;
    }
`

const Skill = styled.div`
    padding: 8px;
    position: relative;
    p {
        margin-bottom: 8px;
    }
    span {
        position: absolute;
        top: 0;
        right: 0;
        padding: 8px;
        color: #1A237E;
    }
`


class Skills extends Component {
    render() {
        return(
            <Grid>
                <Row>
                    <Col xs={12} md={10} mdOffset={1}>
                        <SkillsWrapper>
                            <h1>Professional Skills</h1>
                            <ProfessionalSkills>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <Skill>
                                            <p>Node JS</p>
                                            <span>70%</span>
                                            <LinearProgress mode="determinate" value={70} />
                                        </Skill>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <Skill>
                                            <p>React JS</p>
                                            <span>80%</span>
                                            <LinearProgress mode="determinate" value={80} />
                                        </Skill>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <Skill>
                                            <p>Wordpress</p>
                                            <span>75%</span>
                                            <LinearProgress mode="determinate" value={75} />
                                        </Skill>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <Skill>
                                            <p>Woocommerce</p>
                                            <span>70%</span>
                                            <LinearProgress mode="determinate" value={70} />
                                        </Skill>
                                    </Col>
                                </Row>
                            </ProfessionalSkills>
                        </SkillsWrapper>
                    </Col>
                </Row>
            </Grid>
        )
    }

}

export default Skills