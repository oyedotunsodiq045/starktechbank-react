import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Form, Col, Row, Button } from 'react-bootstrap'
import LoaderCard from '../../components/utils/LoaderCard'
import MessageCard from '../../components/utils/MessageCard'
import { getUserDetails, updateUserProfile } from '../../actions/userActions'

const Profile = ({ location, history }) => {
  const [username, setUsername] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userDetails = useSelector(state => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector(state => state.userUpdateProfile)
  const { success } = userUpdateProfile

  useEffect(() => {
    if (!userInfo) {
      history.push('/')
    } else {
      if (!user.data) {
        dispatch(getUserDetails('me'))
      } else {
        setUsername(user.data.username)
        setFirstname(user.data.firstname)
        setLastname(user.data.lastname)
        setEmail(user.data.email)
        setPhone(user.data.phone)
      }
    }
  }, [dispatch, history, userInfo, user])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(updateUserProfile({ id: user.data.id, username, firstname, lastname, email, phone, password}))
      // DISPATCH UPDATE PROFILE
    }
  }

  return (
    <>
      {message && <MessageCard variant='danger'>{message}</MessageCard>}
      {error && <MessageCard variant='danger'>{error}</MessageCard>}
      {success && <MessageCard variant='success'>Profile Updated</MessageCard>}
      {loading && <LoaderCard />}
      <Card className="mx-auto mt-5 w-50 h-50">
        <Card.Body>
          {/* <Card.Title className="text-center">Create your account</Card.Title> */}
          <Card.Text className="text-center" as="h5">Update your profile</Card.Text>
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

export default Profile
