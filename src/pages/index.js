import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import FaGithub from 'react-icons/lib/fa/github'
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaFacebook from 'react-icons/lib/fa/facebook'
import FaMedium from 'react-icons/lib/fa/medium'
import FaInstagram from 'react-icons/lib/fa/instagram'
import Particles from 'react-particles-js'
import classNames from 'classnames';
import Typist from 'react-typist';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Avatar from 'material-ui/Avatar';

import Header from '../components/Header'
import Intro from '../components/Intro'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'

import withRoot from '../withRoot';
import particlesParam from '../utils/particles'

const styles = theme => ({
  root: {
    textAlign: 'center',
  },
});

class Index extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header />
        <Intro />
        <Skills />
        <Portfolio />
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Index));
