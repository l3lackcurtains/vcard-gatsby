import React, { Component } from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import { StaticMap } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import 'mapbox-gl/dist/mapbox-gl.js'

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
                        <h1>Stay Connected with me</h1>
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
                                    <StaticMap
                                        mapboxApiAccessToken="pk.eyJ1IjoibDNsYWNrY3VydGFpbnMiLCJhIjoiY2pjaDZhcXBxMXh6NzJ3bzJtZWZlNzRtcCJ9.K-JY-zJh3jIOIest3n_iBg"
                                        width={500}
                                        height={380}
                                        latitude={37.7577}
                                        longitude={-122.4376}
                                        zoom={8}
                                        mapStyle="mapbox://styles/l3lackcurtains/cjcikxw0m8b9g2rqyb08ukooy"
                                    />
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