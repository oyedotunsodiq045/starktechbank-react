import React from 'react'
// import { LinkContainer } from 'react-router-bootstrap'
import { Card, Col, Row, ListGroup } from 'react-bootstrap'

const PrimaryBalanceCard = ({ primaryAccountNumber, primaryAccountBalance }) => {
  return (
    <>
      <Col md="6">
        <Card>
          <Card.Header as="h5">
            <Row>
              <Col>
                Primary Account
              </Col>
              <Col className="d-flex justify-content-end">
                <i class="fas fa-dollar-sign"></i>
              </Col>
            </Row>
          </Card.Header>
          {/* <Card.Body> */}
            <ListGroup variant='flush'>
              <ListGroup.Item variant="primary">
                <Row>
                  <Col>
                    Account Number
                  </Col>
                  <Col className="d-flex justify-content-end">
                    {primaryAccountNumber}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item variant="primary">
                <Row>
                  <Col>
                    Account Balance
                  </Col>
                  <Col className="d-flex justify-content-end">
                    {primaryAccountBalance}
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
        </Card>
      </Col>
    </>
  )
}

export default PrimaryBalanceCard
