import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import MdWork from "react-icons/lib/md/work";
import "react-vertical-timeline-component/style.min.css";
import ReactHtmlParser from "react-html-parser";
import Title from "./Title";

const ExperiencesWrapper = styled.div``;
class Experiences extends Component {
  render() {
    const { experiences } = this.props;
    const experiencesList = experiences.edges;
    return (
      <Grid>
        <Row>
          <Col xs={12} md={10} mdOffset={1}>
            <ExperiencesWrapper>
              <Title>Work Experiences</Title>
              <VerticalTimeline>
                {experiencesList.map((e, i) => (
                  <VerticalTimelineElement
                    key={e.node.frontmatter.name}
                    className="vertical-timeline-element--work"
                    date={e.node.frontmatter.duration}
                    iconStyle={{ background: "#E74C3C", color: "#fff" }}
                    icon={<MdWork />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {e.node.frontmatter.role}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {e.node.frontmatter.name}
                    </h4>
                    {ReactHtmlParser(e.node.html)}
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
            </ExperiencesWrapper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Experiences;
