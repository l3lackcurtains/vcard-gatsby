import React, { Component } from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Paper from 'material-ui/Paper';
import { LinearProgress } from 'material-ui/Progress';

const SkillsWrapper = styled.div`
    text-align: left;
    margin-bottom: 40px;
`

const ProfessionalSkills = styled(Paper) `
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
        color: #E74C3C;
    }
    span {
        position: absolute;
        top: 0;
        right: 0;
        padding: 8px;
        color: #2980B9;
    }
`


class Skills extends Component {
    render() {
        const { skills } = this.props
        const skillsList = skills.edges
        return (
            <Grid>
                <Row>
                    <Col xs={12} md={10} mdOffset={1}>
                        <SkillsWrapper>
                            <h1>Professional Skills</h1>
                            <ProfessionalSkills>
                                <Row>
                                    {
                                        skillsList.map((s, i) =>
                                            <Col xs={12} md={6} key={s.node.frontmatter.name}>
                                                <Skill>
                                                    <p>{s.node.frontmatter.name}</p>
                                                    <span>{s.node.frontmatter.amount}%</span>
                                                    <LinearProgress mode="determinate" value={parseInt(s.node.frontmatter.amount)} />
                                                </Skill>
                                            </Col>
                                        )
                                    }
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