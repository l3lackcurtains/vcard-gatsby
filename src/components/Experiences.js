import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import MdWork from 'react-icons/lib/md/work'
import 'react-vertical-timeline-component/style.min.css'


const ExperiencesWrapper = styled.div`
    .vertical-timeline{
        width: 100%;
    }
    @media only screen and (min-width: 1170px) {
        .vertical-timeline-element {
            margin: 1em 0;
        }
        .vertical-timeline-element-content .vertical-timeline-element-date {
            position: absolute;
            width: 100%;
            left: 145%;
            top: 6px;
            font-size: 16px;
            font-size: 1rem;
        }
        .vertical-timeline-element:nth-child(even):not(.vertical-timeline-element--left) .vertical-timeline-element-content .vertical-timeline-element-date {
            left: auto;
            right: 145%;
            text-align: right;
        }
        .vertical-timeline-element-content::before {
            border-left-color: #e3e3e3;
        }
        .vertical-timeline-element.vertical-timeline-element--right .vertical-timeline-element-content::before, .vertical-timeline-element:nth-child(even):not(.vertical-timeline-element--left) .vertical-timeline-element-content::before {
            border-right-color: #e3e3e3;
        }
    }
    /* vertical line */
    .vertical-timeline::before {
        background: #e3e3e3;
    }
    .vertical-timeline-element-content {
        box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
    }
    .vertical-timeline-element-title {
        margin-bottom: 16px;
    }
    @media only screen and (max-width: 1170px) {
        .vertical-timeline-element-content::before {
            border-right-color: #e3e3e3;
        }
    }
`
class Experiences extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12} md={10} mdOffset={1}>
                        <ExperiencesWrapper>
                            <h1>Work Experiences</h1>
                            <VerticalTimeline>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date="2011 - present"
                                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    icon={<MdWork />}
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
                                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    icon={<MdWork />}
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
                                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    icon={<MdWork />}
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
                                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    icon={<MdWork />}
                                >
                                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                                    <p>
                                    User Experience, Visual Design
                                    </p>
                                </VerticalTimelineElement>
                            </VerticalTimeline>
                        </ExperiencesWrapper>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Experiences