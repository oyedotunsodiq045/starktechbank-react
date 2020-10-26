import React from 'react'
// import { LinkContainer } from 'react-router-bootstrap'
import { Card, Col, Row, ListGroup } from 'react-bootstrap'

const DepositCard = () => {
  return (
    <>
      <Col md="4">
        <Card>
          <Card.Header as="h5">
            <Row>
              <Col>
                <i class="far fa-credit-card"></i>
              </Col>
              <Col className="d-flex justify-content-end">
                Deposits
              </Col>
            </Row>
          </Card.Header>
          <ListGroup variant='flush'>
            <ListGroup.Item variant="success">
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

export default DepositCard
