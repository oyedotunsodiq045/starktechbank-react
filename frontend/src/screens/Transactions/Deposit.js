import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import LoaderCard from '../../components/utils/LoaderCard'
import MessageCard from '../../components/utils/MessageCard'
import { getUserDetails } from '../../actions/userActions'
import { deposit } from '../../actions/transactionActions'
// import { TRANSACTION_DEPOSIT_RESET } from '../../constants/transactionConstants'
// import TransactionCard from '../../components/utils/TransactionCard'

const Deposit = ({ location, history }) => {
  const [type, setType] = useState('')
  const [amount, setAmount] = useState(Number)
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userDetails = useSelector(state => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const transactionDeposit = useSelector(state => state.transactionDeposit)
  const { success } = transactionDeposit

  useEffect(() => {
    if (!userInfo) {
      history.push('/')
    } else {
      if (!user.data) {
        dispatch(getUserDetails('me'))
      } else {
        setType(user.data.type)
        setAmount(user.data.amount)
      }
    }
  }, [dispatch, history, userInfo, user])

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(user.data.id)
    console.log(typeof(type), type)
    console.log(typeof(amount), amount)
    dispatch(deposit({ type, amount }))
    // if (type === "") {
    //   setMessage('Please select account type')
    // } else if(amount <= 0) {
    //   setMessage('Please input amount')
    //   // DISPATCH UPDATE PROFILE
    // } else {
    //   dispatch(deposit({ id: user.data.id, type, amount }))
    // }
  }

  return (
    <>
      {message && <MessageCard variant='danger'>{message}</MessageCard>}
      {error && <MessageCard variant='danger'>{error}</MessageCard>}
      {success && <MessageCard variant='success'>Deposit Success</MessageCard>}
      {loading && <LoaderCard />}
      <Form className="mt-5 mb-5" onSubmit={submitHandler}>
        <Form.Group controlId="type">
          <Form.Label className="text-center" as="h3">Make a Deposit</Form.Label>
          <hr />
         <Form.Label className="mt-5" as="h5">Please select account</Form.Label>
          <Form.Control as="select" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">--Please select account type--</option>
            <option value="Primary">Primary</option>
            <option value="Savings">Savings</option>
          </Form.Control>
        </Form.Group>
        <br />
        <Form.Group controlId="amount">
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

export default Deposit
