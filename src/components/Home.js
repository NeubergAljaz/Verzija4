//react
import React from 'react';

//styling
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import './css/styles.css';
import Fade from 'react-reveal/Fade';


const Home = () => {

  return (

    <Container >
      <div>
      <Fade left>
        <Jumbotron className="graid" >

          <h2 style={{ color: "black" }}>Dobrodošli na spletni strani Vizualizacija OPSI!</h2>
          <p style={{ color: "black" }}>
            Stran je namenjena vizualizaciji podatkov o delovnih migracijah pridobljenih s strani OPSI.
        </p>
          <p>

            <Button variant="info" href="/onas" >O nas</Button>
          </p>

        </Jumbotron>
        </Fade>
      </div>
      <div>
      <Fade right>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src={require('../img/map.svg').default} alt='img1' />
            <Card.Body>
              <Card.Title>Zemljevidi migracij</Card.Title>
              <Card.Text>
                Preglejte statistiko delovnih migracij s pomočjo interaktivnega zemljevida. Možnost je izbiranja med karto statističnih regij in karto občin v Sloveniji.
      </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="secondary" size="sm" href="/regije">
                Na stran z zemljevidi
    </Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={require('../img/stats.png').default} alt='img2' />
            <Card.Body>
              <Card.Title>Statistika migracij v Sloveniji</Card.Title>
              <Card.Text>
                Preglejte statistiko delovnih migracij v Sloveniji. Na strani so prikazani splošni podatki.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="secondary" size="sm" href="/statistika">
                Na stran o statistiki
    </Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={require('../img/opsilogo.png').default} alt='img3' className="opsi-photo" />
            <Card.Body>
              <Card.Title>Odprti podatki Slovenije</Card.Title>
              <Card.Text>
                Podatki na naši strani so bili črpani s strani OPSI. Preglejte stran:
      </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="secondary" size="sm" href="https://podatki.gov.si/" target="_blank">
                Na spletno mesto OPSI
            </Button>
            </Card.Footer>
          </Card>
        </CardDeck>
        </Fade>
      </div>




    </Container>

    
  
  );
};

export default Home;