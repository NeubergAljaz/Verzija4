//react
import React from 'react';

//styling
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { palette } from '@material-ui/system';
import './css/styles.css';

function Footer() {
  return (
    <div className="div-footer">

      <Box pt={2} pb={2} bgcolor="#d6d6d6">
        <Container fluid>
          <Row >
            <Col> 
            <p pb={5}>
              <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://material-ui.com/">
                  Vizualizacija OPSI
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
              </Typography>
              </p>
            </Col>
          </Row>


          <Row>
            <Col>
              <Image src={require('../img/logo-uni.png').default} rounded className="photo-feri" />
              <Image src={require('../img/logo-feri.png').default} rounded className="photo-feri" />
            </Col>
          </Row>

        </Container>
      </Box>

    </div>
  );
}

export default Footer;