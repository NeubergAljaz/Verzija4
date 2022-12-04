//react
import React, { useState, useEffect, useMemo, useCallback } from 'react';

//map-gl
import ReactMapGL, { Layer, Source } from 'react-map-gl';

//styling
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/styles.css';
import Slide from 'react-reveal/Slide';

//grafi
import GrafRegije from './graphs/grafRegije.js';
import GrafDelez from './graphs/delezRegije.js';
import SpolRegije from './graphs/spolRegije.js';

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

export default function MapRegije() {

    const [navodila, setNavodila] = React.useState(true);

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

    useEffect(() => {
        fetch(
            'https://raw.githubusercontent.com/KovacevicNik/OPSI-geojson-storage/main/regije_zdruzen.geojson'
        )
            .then(resp => resp.json())
            .then(json => setAllData(json));
    }, []);

    const data = useMemo(() => {
        return allData
    }, [allData]);

    const layerStyle = {
        id: 'data',
        type: 'fill',
    };

    const [color, ] = useState('#ffffff')

    const [hoverInfo, setHoverInfo] = useState(null);
    const [clickInfo, setClickInfo] = useState(null);

    const onClick = useCallback(event => {

        const {
            features,
            srcEvent: { offsetX, offsetY }

        } = event;

        const clickedFeature = features && features[0];

        setClickInfo(
            clickedFeature
                ? {
                    feature: clickedFeature,
                    x: offsetX,
                    y: offsetY
                }
                : null
        );

        setNavodila(false);

        //console.log(navodila);
        //console.log(clickInfo);

    }, []);

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

        //console.log(hoveredFeature);

    }, []);

    if(navodila || clickInfo===null) {
        return (
            <div>
                <main>
                    <div>
                        <Container maxWidth="lg" className={classes.container}>
    
                            {
                                //true
                            }
    
                            <Row>
                                <Col sm={12} lg={8}>
                                    <Paper className={classes.paper}>
                                    <Slide left>
                                        <ReactMapGL
                                            {...viewport}
                                            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                                            mapStyle={"mapbox://styles/nikkovacevic/ckp9xo2vn1j0g17o7s9eealzm"}
                                            onViewportChange={viewport => {
                                                setViewport(viewport);
                                            }}
                                            interactiveLayerIds={['data']}
                                            onHover={onHover}
                                            onClick={onClick}
                                        >
                                            <Source id="sourcelayer" type="geojson" data={data}>
                                                <Layer {...layerStyle} paint={{ 'fill-color': color, 'fill-opacity': 0.3, 'fill-outline-color': "#45634d" }} />
                                            </Source>
                                            {hoverInfo && (
                                                    <div className="tooltip123123" style={{ left: hoverInfo.x, top: hoverInfo.y }}>
                                                    <div>{hoverInfo.feature.properties.SR_UIME}</div>
                                                </div>
                                            )}
                                        </ReactMapGL>
                                        </Slide>
                                    </Paper>
                                </Col>
    
                                <Col sm={12} lg={4}>
                                <Slide right>
                                    <Paper className={classes.paper}>
                                        <h3>Navodila</h3>
                                        <p>
                                            Pred vami je interaktivni zemljevid. Če si želite podrobneje ogledati statistiko migracij za posamezno regijo, samo pritisnite na njo in se vam bodo prikazali grafi.
                                        </p>
                                    </Paper>
                                    </Slide>
                                </Col>
                            </Row>
    
                        </Container>
                    </div>
                </main>
            </div>
        );
    } else {

        return (
            <div>
                <main>
                    <div>
                        <Container maxWidth="lg" className={classes.container}>

                            {
                            //false
                            }

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
                                            onClick={onClick}
                                        >

                                            <Source id="sourcelayer" type="geojson" data={data}>
                                                <Layer {...layerStyle} paint={{ 'fill-color': color, 'fill-opacity': 0.3, 'fill-outline-color': "#45634d" }} />
                                            </Source>
                                            {hoverInfo && (
                                                    <div className="tooltip123123" style={{ left: hoverInfo.x, top: hoverInfo.y }}>
                                                    <div>{hoverInfo.feature.properties.SR_UIME}</div>
                                                </div>
                                            )}
                                        </ReactMapGL>
                                    </Paper>
                                </Col>

                                <Col sm={12} lg={4}>
                                    <Paper className={classes.paper}>
                                        {clickInfo && (
                                            <>
                                                <GrafRegije regija={clickInfo.feature.properties.SR_UIME}></GrafRegije>
                                            </>
                                        )}
                                    </Paper>
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col sm={12} lg={6}>
                                    <div className="div-gori">
                                        <Paper className={classes.paper}>
                                            {clickInfo && (
                                                <>
                                                    <SpolRegije regija={clickInfo.feature.properties.SR_UIME}></SpolRegije>
                                                </>
                                            )}
                                        </Paper>
                                    </div>
                                </Col>

                                <Col sm={12} lg={6}>
                                    <div className="div-gori">
                                        <Paper className={classes.paper}>
                                            {clickInfo && (
                                                <>
                                                    <GrafDelez regija={clickInfo.feature.properties.SR_UIME}></GrafDelez>
                                                </>
                                            )}
                                        </Paper>
                                    </div>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                </main>
            </div>




        );
    }
}
