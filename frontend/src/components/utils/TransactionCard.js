import React from 'react'
// import { LinkContainer } from 'react-router-bootstrap'
import { Form, Button } from 'react-bootstrap'

const TransactionCard = () => {
  return (
    <>
      <Form className="mt-5 mb-5">
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label as="h5">Please select account</Form.Label>
          <Form.Control as="select">
            <option>--Please select account type--</option>
            <option>Primary</option>
            <option>Savings</option>
          </Form.Control>
        </Form.Group>
        <br />
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label as="h5">Please specify amount</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <br />
        <Button variant="primary" block>Submit</Button>
      </Form>
    </>
  )
}

export default TransactionCard
