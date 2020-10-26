import React from 'react'
// import { LinkContainer } from 'react-router-bootstrap'
import { Card, Col, Row, ListGroup } from 'react-bootstrap'

const SavingsBalanceCard = ({ savingsAccount }) => {
  return (
    <>
      <Col md="6">
        <Card>
          <Card.Header as="h5">
            <Row>
              <Col>
                Savings Account
              </Col>
              <Col className="d-flex justify-content-end">
                <i class="fas fa-dollar-sign"></i>
              </Col>
            </Row>
          </Card.Header>
          {/* <Card.Body> */}
            <ListGroup variant='flush'>
              <ListGroup.Item variant="info">
                <Row>
                  <Col>
                    Account Number
                  </Col>
                  <Col className="d-flex justify-content-end">
                    {savingsAccount.savingsAccountNumber}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item variant="info">
                <Row>
                  <Col>
                    Account Balance
                  </Col>
                  <Col className="d-flex justify-content-end">
                    {savingsAccount.accountBalance}
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
            {/* <Row>
              <Col>
                View Details
              </Col>
              <Col className="d-flex justify-content-end">
                <i className="fas fa-arrow-circle-right"></i>
              </Col>
            </Row> */}
          {/* </Card.Body> */}
        </Card>
      </Col>
    </>
  )
}

export default SavingsBalanceCard
