import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Card, Form, Button } from 'react-bootstrap'

const ForgotPassword = () => {
  return (
    <>
    <Card className="mx-auto mt-5 w-50 h-50">
      <Card.Body>
        {/* <Card.Title className="text-center">Forgot password</Card.Title> */}
        <Card.Text className="text-center" as="h5">Forgot password</Card.Text>
        <br />
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Button variant="primary" type="submit" block>
              Submit
            </Button>
          </Form.Group>
        </Form>

        <LinkContainer to="/">
          <Card.Link>Sign in to your StarkTechBank account?</Card.Link>
				</LinkContainer>

        <LinkContainer to="/signup">
          <Card.Link className="float-right">Sign up</Card.Link>
				</LinkContainer>
      </Card.Body>
    </Card>
    </>
  )
}

export default ForgotPassword
