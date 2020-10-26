import React from 'react'
// import { LinkContainer } from 'react-router-bootstrap'
import { Card, Col, Row, ListGroup } from 'react-bootstrap'

const PrimaryBalanceCard = ({ primaryAccount }) => {
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
                    {primaryAccount.primaryAccountNumber}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item variant="primary">
                <Row>
                  <Col>
                    Account Balance
                  </Col>
                  <Col className="d-flex justify-content-end">
                    {primaryAccount.accountBalance}
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
            </Row>
            <hr />
            <Row>
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

export default PrimaryBalanceCard
