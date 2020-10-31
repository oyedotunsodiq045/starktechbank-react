import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Form, Col, Row, Button } from 'react-bootstrap'
import LoaderCard from '../../components/utils/LoaderCard'
import MessageCard from '../../components/utils/MessageCard'
import { getUserDetails, changeUserPassword } from '../../actions/userActions'

const ChangePassword = ({ location, history }) => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userDetails = useSelector(state => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const userChangePassword = useSelector(state => state.userChangePassword)
  const { success } = userChangePassword

  useEffect(() => {
    if (!userInfo) {
      history.push('/')
    } else {
      if (!user.data) {
        dispatch(getUserDetails('me'))
      } else {
        setPassword(user.data.password)
      }
    }
  }, [dispatch, history, userInfo, user])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(changeUserPassword({ id: user.data.id, password}))
      // DISPATCH UPDATE PROFILE
    }
  }
  return (
    <>
      {message && <MessageCard variant='danger'>{message}</MessageCard>}
      {error && <MessageCard variant='danger'>{error}</MessageCard>}
      {success && <MessageCard variant='success'>Password Updated</MessageCard>}
      {loading && <LoaderCard />}
      <Card className="mx-auto mt-5 w-50 h-50">
        <Card.Body>
          {/* <Card.Title className="text-center">Create your account</Card.Title> */}
          <Card.Text className="text-center" as="h5">Change Password</Card.Text>
          <br />
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="password">
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="confirmPassword">
              <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Button variant="primary" type="submit" block>
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </>
  )
}

export default ChangePassword
