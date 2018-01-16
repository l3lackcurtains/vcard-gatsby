import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import FaBook from 'react-icons/lib/fa/book'
import 'react-vertical-timeline-component/style.min.css'


const EducationsWrapper = styled.div`

`
class Educations extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12} md={10} mdOffset={1}>
                        <EducationsWrapper>
                            <h1>Education History</h1>
                            <VerticalTimeline>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date="2011 - present"
                                    iconStyle={{ background: 'rgb(12, 120, 143)', color: '#fff' }}
                                    icon={<FaBook />}
                                >
                                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                                    <p>
                                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                                    </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date="2010 - 2011"
                                    iconStyle={{ background: 'rgb(12, 120, 143)', color: '#fff' }}
                                    icon={<FaBook />}
                                >
                                    <h3 className="vertical-timeline-element-title">Art Director</h3>
                                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                                    <p>
                                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                                    </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date="2008 - 2010"
                                    iconStyle={{ background: 'rgb(12, 120, 143)', color: '#fff' }}
                                    icon={<FaBook />}
                                >
                                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                                    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                                    <p>
                                    User Experience, Visual Design
                                    </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date="2006 - 2008"
                                    iconStyle={{ background: 'rgb(12, 120, 143)', color: '#fff' }}
                                    icon={<FaBook />}
                                >
                                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                                    <p>
                                    User Experience, Visual Design
                                    </p>
                                </VerticalTimelineElement>
                            </VerticalTimeline>
                        </EducationsWrapper>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Educations