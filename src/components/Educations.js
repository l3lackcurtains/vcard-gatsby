import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import FaBook from "react-icons/lib/fa/book";
import "react-vertical-timeline-component/style.min.css";
import ReactHtmlParser from "react-html-parser";
import Title from "./Title";

const EducationsWrapper = styled.div``;
class Educations extends Component {
  render() {
    const { educations } = this.props;
    const educationsList = educations.edges;
    return (
      <Grid>
        <Row>
          <Col xs={12} md={10} mdOffset={1}>
            <EducationsWrapper>
              <Title>Education History</Title>
              <VerticalTimeline>
                {educationsList.map((e, i) => (
                  <VerticalTimelineElement
                    key={e.node.frontmatter.name}
                    className="vertical-timeline-element--work"
                    date={e.node.frontmatter.duration}
                    iconStyle={{ background: "#E74C3C", color: "#fff" }}
                    icon={<FaBook />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {e.node.frontmatter.degree}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {e.node.frontmatter.name}
                    </h4>
                    {ReactHtmlParser(e.node.html)}
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
            </EducationsWrapper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Educations;
