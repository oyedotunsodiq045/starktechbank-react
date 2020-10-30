import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Card, Form, Button, Col } from 'react-bootstrap'
import LoaderCard from '../../components/utils/LoaderCard'
import MessageCard from '../../components/utils/MessageCard'
import { login } from '../../actions/userActions'

const SignIn = ({ location, history }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/home'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(username, password))
  }

  return (
    <>
    {error && <MessageCard variant='danger'>{error}</MessageCard>}
    {loading && <LoaderCard />}
    <Card className="mx-auto mt-5 w-50 h-50">
      <Card.Body>
        {/* <Card.Title className="text-center">Sign in to StarkTechBank</Card.Title> */}
        <Card.Text className="text-center" as="h5">Sign in to StarkTechBank</Card.Text>
        <br />
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
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
        <br />

        <LinkContainer to="/forgot-password">
          <Card.Link>Forgot password?</Card.Link>
				</LinkContainer>

        <LinkContainer to={redirect ? `/signup?redirect=${redirect}` : '/signup'}>
          <Card.Link className="float-right">Don't have an account?</Card.Link>
				</LinkContainer>
      </Card.Body>
    </Card>
    </>
  )
}

export default SignIn
