//react
import React, { useState, useEffect, useMemo, useCallback } from 'react';

//map-gl
import ReactMapGL, { Layer, Source } from 'react-map-gl';

//styling
import { makeStyles } from '@material-ui/core/styles';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Paper from '@material-ui/core/Paper';
import './css/styles.css';
import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate';

//semafor
import { updatePercentiles } from './samofor/racun_samoforja.js';
import { dataLayer } from './samofor/barve_samoforja.js';
import ControlPanel from './samofor/control-panel.js';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    }

}));

export default function MapObcine() {

   

    const classes = useStyles();

    const [viewport, setViewport] = useState({
        latitude: 46.1199444,
        longitude: 14.815333333333333,
        width: '100%',
        height: '70vh',
        zoom: 6.8,
        minZoom: 6.8
    });

    const [allData, setAllData] = useState(null);
    const [year1, setYear] = useState(2005);

    useEffect(() => {
        fetch(
            'https://raw.githubusercontent.com/Aljaz672/Test/main/semafor_obcine.geojson'
        )
            .then(resp => resp.json())
            .then(json => setAllData(json));
    }, []);

    const data = useMemo(() => {
        return allData && updatePercentiles(allData, f => f.properties.barvanje[year1]);
    }, [allData, year1]);

    const layerStyle = {
        id: 'data',
        type: 'fill',
    };

    const [color, ] = useState('#ffffff')

    const [hoverInfo, setHoverInfo] = useState(null);
    

   

    const onHover = useCallback(event => {
        const {
            features,
            srcEvent: { offsetX, offsetY }

        } = event;

        const hoveredFeature = features && features[0];

        setHoverInfo(
            hoveredFeature
                ? {
                    feature: hoveredFeature,
                    x: offsetX,
                    y: offsetY
                }
                : null
        );
    }, []);

  
        return (
            <>
            <div>
            <ControlPanel year={year1} onChange={value => setYear(value)} />
                <main>
                    <div>
                        <Container maxWidth="lg" className={classes.container}>
                            <Row>
                                <Col sm={12} lg={8}>
                                    <Paper className={classes.paper}>
                                        <ReactMapGL
                                            {...viewport}
                                            mapboxApiAccessToken={"pk.eyJ1Ijoibmlra292YWNldmljIiwiYSI6ImNrcDlwajBjaDBnbmEycmxsMDU5bHZtZWIifQ.7jC2o5D5GqDT7NCqCCkufQ"}
                                            mapStyle={"mapbox://styles/nikkovacevic/ckp9xo2vn1j0g17o7s9eealzm"}
                                            onViewportChange={viewport => {
                                                setViewport(viewport);
                                            }}
                                            interactiveLayerIds={['data']}
                                            onHover={onHover}
                                        >

                                            <Source id="sourcelayer" type="geojson" data={data}>
                                                <Layer {...dataLayer} />
                                            </Source>
                                            {hoverInfo && (
                                                <div className="tooltip123123" style={{ left: hoverInfo.x, top: hoverInfo.y }}>

                                                    <div>{hoverInfo.feature.properties.OB_UIME}</div>
                                                    <hr></hr>
                                                    {
                                                        <div>Indeks: {hoverInfo.feature.properties.value}</div>
                                                    }

                                                </div>
                                            )}
                                        </ReactMapGL>

                                    </Paper>
                                </Col>

                                <Col sm={12} lg={4}>
                                    <Paper className={classes.paper}>
                                       


                                        <h3>Navodila</h3>
                                        <p>Povle??ite drsnik ter po letih spremljajte spreminjanje indeksa oziroma dele??a prebivalstva, ki dela v regiji, kjer ??ivi.</p>

                                        <img src={require('../img/slider.png').default} alt="slider" />

                                        <p style={{ textAlign: 'left' }}>??? Spreminjanje barve od najmanj??ega do najve??jega indeksa.</p>
                                        <p style={{ textAlign: 'left' }}>Mi??ko prislonite na regijo ter poglejte kak??en je dele?? prebivalstva, ki dela v regiji, kjer ??ivi.</p>
                                    </Paper>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                </main>
            </div>

        </>
            
        );
    }

