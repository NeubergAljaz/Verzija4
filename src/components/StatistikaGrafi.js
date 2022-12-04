//react
import React from 'react';

//styling
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

//grafi
import GrafRegijeStat from './graphs/grafRegijeStat.js';
import GrafRegijePreb from './graphs/grafRegijePreb.js';
import GrafObcineStat from './graphs/grafObcineStat.js';
import GrafObcinePreb from './graphs/grafObcinePreb.js';

export default function Multigrafs() {
  
  return (
    <React.Fragment>
      <h3>Grafi indeksa delovnih migracij in števila migrantov</h3>
     <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  
  <Tab eventKey="Regije" title="Regije">

  <Accordion defaultActiveKey="100">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Indeks
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <Accordion defaultActiveKey="100">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        2020
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <GrafRegijeStat leto={2020} kaz="Indeks delovne migracije"></GrafRegijeStat>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        2019
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
      <GrafRegijeStat leto={2019} kaz="Indeks delovne migracije"></GrafRegijeStat>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
        2018
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
      <GrafRegijeStat leto={2018} kaz="Indeks delovne migracije"></GrafRegijeStat>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
        2017
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>
      <GrafRegijeStat leto={2017} kaz="Indeks delovne migracije"></GrafRegijeStat>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="4">
        2016
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="4">
      <Card.Body>
      <GrafRegijeStat leto={2016} kaz="Indeks delovne migracije"></GrafRegijeStat>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="5">
        2015
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="5">
      <Card.Body>
      <GrafRegijeStat leto={2015} kaz="Indeks delovne migracije"></GrafRegijeStat>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>

      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Migranti
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        
      <Accordion defaultActiveKey="100">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        2020
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <GrafRegijePreb leto={2020} kaz="Delovni migranti [brez kmetov], ki delajo zunaj regije prebivališča"></GrafRegijePreb>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        2019
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
      <GrafRegijePreb leto={2019} kaz="Delovni migranti [brez kmetov], ki delajo zunaj regije prebivališča"></GrafRegijePreb>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
        2018
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
      <GrafRegijePreb leto={2018} kaz="Delovni migranti [brez kmetov], ki delajo zunaj regije prebivališča"></GrafRegijePreb>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
        2017
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>
      <GrafRegijePreb leto={2017} kaz="Delovni migranti [brez kmetov], ki delajo zunaj regije prebivališča"></GrafRegijePreb>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="4">
        2016
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="4">
      <Card.Body>
      <GrafRegijePreb leto={2016} kaz="Delovni migranti [brez kmetov], ki delajo zunaj regije prebivališča"></GrafRegijePreb>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="5">
        2015
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="5">
      <Card.Body>
      <GrafRegijePreb leto={2015} kaz="Delovni migranti [brez kmetov], ki delajo zunaj regije prebivališča"></GrafRegijePreb>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>


      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>

  </Tab>

  <Tab eventKey="Občine" title="Občine">
    

  <Accordion defaultActiveKey="100">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Indeks
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <Accordion defaultActiveKey="100">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        2020
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <GrafObcineStat leto={2020} kaz="Indeks delovne migracije"></GrafObcineStat>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        2019
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
      <GrafObcineStat leto={2019} kaz="Indeks delovne migracije"></GrafObcineStat>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
        2018
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
      <GrafObcineStat leto={2018} kaz="Indeks delovne migracije"></GrafObcineStat>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
        2017
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>
      <GrafObcineStat leto={2017} kaz="Indeks delovne migracije"></GrafObcineStat>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="4">
        2016
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="4">
      <Card.Body>
      <GrafObcineStat leto={2016} kaz="Indeks delovne migracije"></GrafObcineStat>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="5">
        2015
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="5">
      <Card.Body>
      <GrafObcineStat leto={2015} kaz="Indeks delovne migracije"></GrafObcineStat>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>


      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Migranti
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        
      <Accordion defaultActiveKey="100">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        2020
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <GrafObcinePreb leto={2020} kaz="Delovni migranti [brez kmetov], ki delajo zunaj občine prebivališča"></GrafObcinePreb>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        2019
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
      <GrafObcinePreb leto={2019} kaz="Delovni migranti [brez kmetov], ki delajo zunaj občine prebivališča"></GrafObcinePreb>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
        2018
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
      <GrafObcinePreb leto={2018} kaz="Delovni migranti [brez kmetov], ki delajo zunaj občine prebivališča"></GrafObcinePreb>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
        2017
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>
      <GrafObcinePreb leto={2017} kaz="Delovni migranti [brez kmetov], ki delajo zunaj občine prebivališča"></GrafObcinePreb>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="4">
        2016
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="4">
      <Card.Body>
      <GrafObcinePreb leto={2016} kaz="Delovni migranti [brez kmetov], ki delajo zunaj občine prebivališča"></GrafObcinePreb>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="5">
        2015
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="5">
      <Card.Body>
      <GrafObcinePreb leto={2015} kaz="Delovni migranti [brez kmetov], ki delajo zunaj občine prebivališča"></GrafObcinePreb>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>


      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>


  </Tab>
  </Tabs>
    </React.Fragment>
  );
}