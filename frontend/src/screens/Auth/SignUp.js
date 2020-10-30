import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Card, Form, Button, Col } from 'react-bootstrap'
import LoaderCard from '../../components/utils/LoaderCard'
import MessageCard from '../../components/utils/MessageCard'
import { register } from '../../actions/userActions'

const SignUp = ({ location, history }) => {
  const [username, setUsername] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userRegister = useSelector(state => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/home'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(username, firstname, lastname, email, phone, password))
    }
  }

  return (
    <>
    {message && <MessageCard variant='danger'>{message}</MessageCard>}
    {error && <MessageCard variant='danger'>{error}</MessageCard>}
    {loading && <LoaderCard />}
    <Card className="mx-auto mt-5 w-50 h-50">
      <Card.Body>
        {/* <Card.Title className="text-center">Create your account</Card.Title> */}
        <Card.Text className="text-center" as="h5">Create your account</Card.Text>
        <br />
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="firstname">
            <Form.Control type="text" placeholder="First name" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="lastname">
            <Form.Control type="text" placeholder="Last name" value={lastname} onChange={(e) => setLastname(e.target.value)} />
          </Form.Group>
          
          <Form.Group controlId="email">
            <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="phone">
            <Form.Control type="text" placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </Form.Group>
          
          <Form.Group controlId="username">
            <Form.Control type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </Form.Group>
          
          <Form.Row>
            <Col md="9">
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I certify that I am 18 years of age or older, and agree to the User Agreement and Privacy Policy." />
              </Form.Group>
            </Col>
            <Col className="d-flex flex-row-reverse" md="3">
              <Button variant="primary" type="submit">
                Register
              </Button>
            </Col>
          </Form.Row>
        </Form>
        <br />

          <LinkContainer to={redirect ? `/?redirect=${redirect}` : '/'}>
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
