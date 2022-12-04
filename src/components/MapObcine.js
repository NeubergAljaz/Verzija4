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
//grafi
import GrafIndeks from './graphs/grafObcine.js';
import GrafDelez from './graphs/delezObcine.js';
import GrafSpol from './graphs/SpolObcine.js';



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
            'https://raw.githubusercontent.com/KovacevicNik/OPSI-geojson-storage/main/obcinemini.geojson'
        )
            .then(resp => resp.json())
            .then(json => setAllData(json));
    }, []);

    const data = useMemo(() => {
        return allData;
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
                                                    <div>{hoverInfo.feature.properties.OB_UIME}</div>
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
                                                Pred vami je interaktivni zemljevid. Če si želite podrobneje ogledati statistiko migracij za posamezno občino, samo pritisnite na njo in se vam bodo prikazali grafi.
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
                                                    <div>{hoverInfo.feature.properties.OB_UIME}</div>
                                                </div>
                                            )}
                                        </ReactMapGL>
    
                                    </Paper>
                                </Col>
    
                                <Col sm={12} lg={4}>
                                    <Paper className={classes.paper}>
                                        {clickInfo && (
                                            <>
                                                <GrafIndeks obcina={clickInfo.feature.properties.OB_UIME}></GrafIndeks>
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
    
                                                    <GrafSpol obcina={clickInfo.feature.properties.OB_UIME}></GrafSpol>
    
    
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
    
    
                                                    <GrafDelez obcina={clickInfo.feature.properties.OB_UIME}></GrafDelez>
    
    
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
