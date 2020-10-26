import React from 'react'
// import { LinkContainer } from 'react-router-bootstrap'
import { Card, Col, Row, ListGroup } from 'react-bootstrap'

const SavingsAccountCard = ({ savingsAccount }) => {
  return (
    <>
      <Col md="3">
        <Card className="text-center">
          <Card.Header as="h5">
            Savings Account
          </Card.Header>
          <ListGroup variant='flush'>
            <ListGroup.Item variant="info">
              <Row>
                <Col>{savingsAccount.savingsAccountNumber}</Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
          {/* <Card.Body>
            <Card.Text className="font-weight-bold">{savingsAccount.savingsAccountNumber}</Card.Text>
          </Card.Body> */}
        </Card>
      </Col>
    </>
  )
}

export default SavingsAccountCard
