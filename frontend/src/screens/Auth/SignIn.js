import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Card, Form, Button, Col } from 'react-bootstrap'

const SignIn = () => {
  return (
    <>
    <Card className="mx-auto mt-5 w-50 h-50">
      <Card.Body>
        {/* <Card.Title className="text-center">Sign in to StarkTechBank</Card.Title> */}
        <Card.Text className="text-center" as="h5">Sign in to StarkTechBank</Card.Text>
        <br />
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Username" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          
          <Form.Row>
            <Col md="9">
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Keep me signed in on this computer" />
              </Form.Group>
            </Col>
            <Col className="d-flex flex-row-reverse" md="3">
              <Button variant="primary" type="submit">
                Sign in
              </Button>
            </Col>
          </Form.Row>
        </Form>

        <LinkContainer to="/forgot-password">
          <Card.Link>Forgot password?</Card.Link>
				</LinkContainer>

        <LinkContainer to="/signup">
          <Card.Link className="float-right">Don't have an account?</Card.Link>
				</LinkContainer>
      </Card.Body>
    </Card>
    </>
  )
}

export default SignIn
