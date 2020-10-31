import React from 'react'
// import { LinkContainer } from 'react-router-bootstrap'
import { Form, Button } from 'react-bootstrap'

const TransactionCard = ({ label, type, submitHandler, setType, setAmount, amount = Number }) => {

  return (
    <>
      <Form className="mt-5 mb-5" onSubmit={submitHandler}>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label className="text-center" as="h3">{label}</Form.Label>
          <hr />
          <Form.Label className="mt-5" as="h5">Please select account</Form.Label>
          <Form.Control as="select" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">--Please select account type--</option>
            <option value="Primary">Primary</option>
            <option value="Savings">Savings</option>
          </Form.Control>
        </Form.Group>
        <br />
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label as="h5">Please specify amount</Form.Label>
          <Form.Control type="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </Form.Group>
        <br />
        <Form.Group controlId="formBasicEmail">
          <Button variant="primary" type="submit" block>
            Submit
          </Button>
        </Form.Group>
      </Form>
    </>
  )
}

export default TransactionCard
