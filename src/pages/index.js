import React from 'react';
import PropTypes from 'prop-types'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import { withStyles } from 'material-ui/styles';
import GlobalStyle from '../utils/GlobalStyle'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Experiences from '../components/Experiences'
import Educations from '../components/Educations'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import withRoot from '../withRoot'

const styles = theme => ({
  root: {
    //
  },
});

class Index extends React.Component {

  render() {
    const { classes } = this.props
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    return (
      <div className={classes.root}>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{siteTitle}</title>
            <meta name="description" content="Full Stack Web Developer based in Pokhara." />
            <style>{
              `
                body {
                  margin: 0 !important;
                  padding: 0 !important;
                }
              `
              }
              
            </style>
        </Helmet>
        <GlobalStyle>
          <Header />
          <Element name="intro">
            <Intro about={this.props.data.about} social={this.props.data.social} />
          </Element>
          <Element name="skills">
            <Skills skills={this.props.data.skills} />
          </Element>
          <Element name="portfolio">
            <Portfolio portfolio={this.props.data.portfolio} />
          </Element>
          <Element name="experiences">
            <Experiences experiences={this.props.data.experiences} />
          </Element>
          <Element name="educations">
            <Educations educations={this.props.data.educations} />
          </Element>
          <Element name="contact">
            <Contact />
          </Element>
          <Footer />
        </GlobalStyle>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Index))

export const skillsQuery = graphql`
  query IndexQuery {
    site: site {
      siteMetadata {
        title
      }
    }
    skills: allMarkdownRemark(filter: { frontmatter: { title: { eq: "skills"}}}){
      totalCount
      edges {
        node {
          frontmatter{
            name
            amount
          }
        }
      }
    }
    portfolio: allMarkdownRemark(filter: { frontmatter: { title: { eq: "portfolio"}}}){
      totalCount
      edges {
        node {
          frontmatter{
            name
            image
          }
        }
      }
    }
    educations: allMarkdownRemark(filter: { frontmatter: { title: { eq: "educations"}}}){
      totalCount
      edges {
        node {
          frontmatter{
            name
            duration
            degree
          }
          html
        }
      }
    }
    experiences: allMarkdownRemark(filter: { frontmatter: { title: { eq: "experiences"}}}){
      totalCount
      edges {
        node {
          frontmatter{
            name
            duration
            role
          }
          html
        }
      }
    }
    about: allMarkdownRemark(filter: { frontmatter: { title: { eq: "about"}}}){
      totalCount
      edges {
        node {
          frontmatter{
            name
            role
            age
            address
            email
            freelance
            cv
          }
          html
        }
      }
    }
    social: allMarkdownRemark(filter: { frontmatter: { title: { eq: "social"}}}){
      totalCount
      edges {
        node {
          frontmatter{
            facebook
            twitter
            instagram
            github
            medium
          }
        }
      }
    }
  }
`