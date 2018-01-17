import React, { Component } from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Title from './Title'
import GoogleMapReact from 'google-map-react'
import FaMapMarker from 'react-icons/lib/fa/map-marker'

const MapElement = ({ text }) => <div style={{ fontSize: 50, color: '#2C3E50' }}>{text}</div>

class SimpleMap extends Component {
    static defaultProps = {
      center: {lat: 59.95, lng: 30.33},
      zoom: 11
    }
  
    render() {
      return (
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <MapElement
            lat={59.955413}
            lng={30.337844}
            text={<FaMapMarker />}
          />
        </GoogleMapReact>
      )
    }
  }

const ContactInfo = styled(Paper)`
    && {
        padding: 32px;
        p {
            margin: 0;
        }
    }
`

const MapInfo = styled(Paper)`
    && {
        position: relative;
        overflow: hidden;
        height: 383px;
        @media only screen and (max-width: 1170px) { 
            height: 413px;
        }
    }
`

const InputField = styled(TextField)`
    && {
        margin: 16px 0;
    }
`

class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: '',
    }
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        })
    }
    render() {
        return(
            <Grid>
                <Row>
                    <Col xs={12} md={10} mdOffset={1}>
                        <Title>Stay Connected with me</Title>
                        <Row>
                            <Col xs={12} md={6}>
                                <ContactInfo>
                                    <p>Hey There, happy to hear from you.</p>
                                    <form noValidate autoComplete="off">
                                        <InputField
                                            fullWidth
                                            id="name"
                                            label="Name"
                                            value={this.state.name}
                                            onChange={this.handleChange('name')}
                                        />
                                        <InputField
                                            fullWidth
                                            id="email"
                                            label="Email"
                                            type="email"
                                            value={this.state.email}
                                            onChange={this.handleChange('email')}
                                        />
                                        <InputField
                                            fullWidth
                                            multiline
                                            id="message"
                                            label="Message"
                                            value={this.state.message}
                                            onChange={this.handleChange('message')}
                                        />
                                    </form>
                                </ContactInfo>
                            </Col>
                            <Col xs={12} md={6}>
                                <MapInfo>
                                    <SimpleMap />
                                </MapInfo>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Contact