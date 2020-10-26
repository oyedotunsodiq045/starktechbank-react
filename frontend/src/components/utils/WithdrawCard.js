import React from 'react'
// import { LinkContainer } from 'react-router-bootstrap'
import { Card, Col, Row, ListGroup } from 'react-bootstrap'

const WithdrawCard = () => {
  return (
    <>
      <Col md="4">
        <Card>
          <Card.Header as="h5">
            <Row>
              <Col>
                <i class="far fa-money-bill-alt"></i>
              </Col>
              <Col className="d-flex justify-content-end">
                Withdrawals
              </Col>
            </Row>
          </Card.Header>
          <ListGroup variant='flush'>
            <ListGroup.Item variant="warning">
              <Row>
                <Col>
                  View Details
                </Col>
                <Col className="d-flex justify-content-end">
                  <i className="fas fa-arrow-circle-right"></i>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
          {/* <Card.Body>
            <Row>
              <Col>
                View Details
              </Col>
              <Col className="d-flex justify-content-end">
                <i className="fas fa-arrow-circle-right"></i>
              </Col>
            </Row>
          </Card.Body> */}
        </Card>
      </Col>
    </>
  )
}

export default WithdrawCard
