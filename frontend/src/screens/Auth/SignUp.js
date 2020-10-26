import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Card, Form, Button, Col } from 'react-bootstrap'

const SignUp = () => {
  return (
    <>
    <Card className="mx-auto mt-5 w-50 h-50">
      <Card.Body>
        {/* <Card.Title className="text-center">Create your account</Card.Title> */}
        <Card.Text className="text-center" as="h5">Create your account</Card.Text>
        <br />
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control type="text" placeholder="First name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control type="text" placeholder="Last name" />
            </Form.Group>
          </Form.Row>
        
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control type="text" placeholder="Phone number" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control type="text" placeholder="Username" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form.Row>
          
          <Form.Row>
            <Col md="9">
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I certify that I am 18 years of age or older, and agree to the User Agreement and Privacy Policy." />
              </Form.Group>
            </Col>
            <Col className="d-flex flex-row-reverse" md="3">
            {/* <Col md="3"> */}
              <Button variant="primary" type="submit">
                Register
                {/* Create account */}
              </Button>
            </Col>
          </Form.Row>
        </Form>

          <LinkContainer to="/">
            <Card.Link>
              <Card.Text className="text-center">
                Already have a StarkTechBank account? Log in
              </Card.Text>
            </Card.Link>
					</LinkContainer>
      </Card.Body>
    </Card>
    </>
  )
}

export default SignUp
