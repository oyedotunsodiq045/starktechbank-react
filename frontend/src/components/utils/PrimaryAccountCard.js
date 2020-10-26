import React from 'react'
// import { LinkContainer } from 'react-router-bootstrap'
import { Card, Col, Row, ListGroup } from 'react-bootstrap'

const PrimaryAccountCard = ({ primaryAccount }) => {
  return (
    <>
      <Col md="3">
        <Card className="text-center">
          <Card.Header as="h5">
            Primary Account
          </Card.Header>
          <ListGroup variant='flush'>
            <ListGroup.Item variant="primary">
              <Row>
                <Col>{primaryAccount.primaryAccountNumber}</Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
          {/* <Card.Body>
            <Card.Text className="font-weight-bold">{primaryAccount.primaryAccountNumber}</Card.Text>
          </Card.Body> */}
        </Card>
      </Col>
    </>
  )
}

export default PrimaryAccountCard
