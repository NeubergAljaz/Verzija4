//react
import React, { useState, useEffect, useMemo, useCallback } from 'react';

//map-gl
import ReactMapGL, { Layer, Source } from 'react-map-gl';

//styling
import { makeStyles } from '@material-ui/core/styles';
import Container from 'react-bootstrap/Container'
import Paper from '@material-ui/core/Paper';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/styles.css';


//semafor
import { updatePercentiles } from './samofor/racun_samoforja.js';
import { dataLayer } from './samofor/barve_samoforja.js';
import ControlPanel from './samofor/control-panel';

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

export default function MapSemafor() {

    const classes = useStyles();

    const [viewport, setViewport] = useState({
        latitude: 46.1199444,
        longitude: 14.815333333333333,
        width: '100%',
        height: '70vh',
        zoom: 6.8,
        minZoom: 6.8
    });

    const [year, setYear] = useState(2020);
    const [allData, setAllData] = useState(null);

    useEffect(() => {
        fetch(
            'https://raw.githubusercontent.com/KovacevicNik/OPSI-geojson-storage/main/barvanje_regij.geojson'
        )
            .then(resp => resp.json())
            .then(json => setAllData(json));
    }, []);

    const data = useMemo(() => {
        return allData && updatePercentiles(allData, f => f.properties.barvanje[year]);
    }, [allData, year]);

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

        console.log(hoveredFeature);

    }, []);

    return (

        <>
            <div>
                <main>
                    <div>
                        <Container maxWidth="lg" className={classes.container}>
                            <Row>
                                <Col sm={12} lg={8}>
                                    <Paper className={classes.paper}>
                                        <ReactMapGL
                                            {...viewport}
                                            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
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

                                                    <div>{hoverInfo.feature.properties.SR_UIME}</div>
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
                                        <ControlPanel year={year} onChange={value => setYear(value)} />
                                        <h3>Navodila</h3>
                                        <p>Povlečite drsnik ter po letih spremljajte spreminjanje indeksa oziroma deleža prebivalstva, ki dela v regiji, kjer živi.</p>

                                        <img src={require('../img/slider.png').default} alt="slider" />

                                        <p style={{ textAlign: 'left' }}>⇧ Spreminjanje barve od najmanjšega do največjega indeksa.</p>
                                        <p style={{ textAlign: 'left' }}>Miško prislonite na regijo ter poglejte kakšen je delež prebivalstva, ki dela v regiji, kjer živi.</p>
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
