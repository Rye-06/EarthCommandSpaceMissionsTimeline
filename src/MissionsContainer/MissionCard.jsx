import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { Timeline } from '../Timeline/Timeline'
import Badge from 'react-bootstrap/Badge';

export const MissionCard = ({ name, icon, description, status }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const imageLocation = `${process.env.PUBLIC_URL}/missions/${icon}`;
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imageLocation} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
          <Badge bg="secondary">{status}</Badge>
          {''}
            {description}
            </Card.Text>
          <Button variant="dark" onClick={handleShow}>
            Open timeline
          </Button>
        </Card.Body>
      </Card>

      <Modal size="lg" show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{<Timeline />}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};