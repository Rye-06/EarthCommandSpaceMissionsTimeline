import './App.css';
import { MissionCard } from './MissionsContainer/MissionCard'
import { MissionsContainer } from './MissionsContainer/MissionsContainer'
import { Storybook } from './Storybook/Storybook'
import { missions, categories } from "./MissionsContainer/MissionsMock";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';


function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const uncategorizedMissions = missions.filter(
    (mission) => mission.type === ""
  );
  return (
    <>
      <div className="App">
        <header className="header">
          <h1 className="title">Team Name: Earth Mission</h1>
        </header>
        <Button variant="dark" onClick={handleShow}>
          Open Storybook
        </Button>
        <section>
          <Container>
            <Row className="justify-content-md-center">
              <MissionsContainer missions={uncategorizedMissions} />
              {categories.map((category) => {
                const filteredMissions = missions.filter(
                  (mission) => mission.type === category
                );
                return (
                  <MissionsContainer
                    missions={filteredMissions}
                    category={category}
                  />
                );
              })}
            </Row>
          </Container>

          <h2>Team members:</h2>
          <ul>
            <li>
              <h5>Natalia Bulaieva</h5>
            </li>
            <li>
              <h5>Byron Torres</h5>
            </li>
            <li>
              <h5>Shaurya Sareen</h5>
            </li>
            <li>
              <h5>Samar AboulEla</h5>
            </li>
            <li>
              <h5>Wen-Chung Cheng</h5>
            </li>
            <li>
              <h5>Lily MacFaydian</h5>
            </li>
          </ul>
        </section>
      </div>

      <Modal size="lg" show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Storybook</Modal.Title>
        </Modal.Header>
        <Modal.Body>{<Storybook />}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const Home = () => {
  return (
    <div className="App">
      <header className="header">
        <h1 className="title">Team Name: Earth Mission</h1>
      </header>
      <section>
        <Container>
          <Row className="justify-content-md-center">
            {missions.map((mission) => {
              return (
                <MissionCard
                  name={mission.name}
                  icon={mission.icon}
                  description={mission.description}
                />
              );
            })}
          </Row>
        </Container>
      </section>
    </div>
  );
}

const TeamMembers = () => {
  return (
    <section>
      <h2>Team members:</h2>
      <ul>
        <li>
          <h5>Natalia Bulaieva</h5>
        </li>
        <li>
          <h5>Byron Torres</h5>
        </li>
        <li>
          <h5>Shaurya Sareen</h5>
        </li>
        <li>
          <h5>Samar AboulEla</h5>
        </li>
        <li>
          <h5>Wen-Chung Cheng</h5>
        </li>
        <li>
          <h5>Lily MacFaydian</h5>
        </li>
      </ul>
    </section>
  );
}


export default App;
