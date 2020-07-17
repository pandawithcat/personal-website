import React, { useState } from 'react';
import { CardProp } from '../../data/dataTypes';
import { Card, Button, Container, Modal, CardDeck } from 'react-bootstrap';
import resume from '../../Documents/resume.pdf';

function Cards({ cardsData }) {
  const data: CardProp[] = cardsData;
  return (
    // <Container id="CardsContainer">
    //   <Row>
    //     {data.map((card, idx) => {
    //       return (
    //         <Col>
    //           <CardWrapper key={idx} card={card}></CardWrapper>;
    //         </Col>
    //       );
    //     })}
    //   </Row>
    // </Container>

    <Container id="CardsContainer">
      <CardDeck>
        {data.map((card, idx) => {
          return <CardWrapper key={idx} card={card}></CardWrapper>;
        })}
      </CardDeck>
    </Container>
  );
}

function CareerCard(cardData: CardProp) {
  return (
    <Card border="dark" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{cardData.title}</Card.Title>
        <Card.Text>{cardData.description}</Card.Text>
        <Button variant="secondary" href={resume}>
          Resume
        </Button>
      </Card.Body>
    </Card>
  );
}

function HobbyCard(cardData: CardProp) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Card style={{ width: '5' }}>
      <Card.Body>
        <Card.Title>{cardData.title}</Card.Title>
        <Card.Text>{cardData.description}</Card.Text>

        <Button variant="primary" onClick={handleShow}>
          Click
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Notice</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {'Howdy' + cardData.type + ' page is not ready yet'}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>
  );
}

function CardWrapper({ card }) {
  const cardData: CardProp = card;
  if (cardData.type === 'hobby') {
    return HobbyCard(cardData);
  } else {
    return CareerCard(cardData);
  }
}

export default Cards;
