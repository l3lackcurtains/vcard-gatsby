import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GlobalStyle from '../utils/GlobalStyle'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Experiences from '../components/Experiences'
import Educations from '../components/Educations'

import withRoot from '../withRoot';

const styles = theme => ({
  root: {
    //
  },
});

class Index extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <GlobalStyle>
          <Header />
          <Intro />
          <Skills />
          <Portfolio />
          <Experiences />
          <Educations />
        </GlobalStyle>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Index));
