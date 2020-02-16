import React, { useEffect } from 'react';
import { H3, Text } from './Titles.js';
import {
  Button,
  Card,
  CardTitle,
  CardText,
  Container,
  Col,
  Form, FormGroup, Label, Input, FormText,
  Row
} from "reactstrap";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet';
import SETTINGS from '../settings';
import 'leaflet/dist/leaflet.css'

const Center = styled.div`
  padding-top: 50px;
  width: 25%;
  margin: auto;
`;

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const MarkerIcon =L.icon({
    iconUrl: require('../assets/img/marker.png'),
    iconSize: [32,38],
    iconAnchor: [32, 32],
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null
});

export default () => {
  return (
    <section className="section section-lg section-shaped pg-250" id="#map">
      <div className="h-100">
        <Row className="align-items-center">
          <Col lg="6">
            <Center>
              <H3><FontAwesomeIcon icon={['fas', 'map-marker-alt']} /> Où nous trouver </H3>
              <Text>
                <ul style={{listStyleType: "none"}}>
                  {SETTINGS.location.entreprise ?
                    <li>
                      <FontAwesomeIcon icon={['fas', 'address-book']} />
                      {SETTINGS.location.entreprise.url
                        ? <a href={SETTINGS.location.entreprise.url}> {SETTINGS.location.entreprise.name}</a>
                        : SETTINGS.location.entreprise}
                    </li>
                    : null
                  }
                  <li><FontAwesomeIcon icon={['fas', 'road']} />{` ${SETTINGS.location.number} ${SETTINGS.location.street}`}</li>
                  <li><FontAwesomeIcon icon={['fas', 'street-view']} />{` ${SETTINGS.location.CP} ${SETTINGS.location.town}`}</li>
                </ul>
              </Text>
            </Center>
          </Col>
          <Col lg="6" >
            <Map style={{zIndex: -1, width: "100%", height: "400px"}} center={SETTINGS.location.position} zoom={16} zoomControl={false} attributionControl={false}>
              <TileLayer
                url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png"
              />
              <Marker position={SETTINGS.location.position} icon={MarkerIcon}/>
            </Map>
          </Col>
        </Row>
      </div>
    </section>
  );
}
