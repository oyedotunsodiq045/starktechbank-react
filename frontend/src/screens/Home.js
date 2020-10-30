import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Col, Row, ListGroup } from 'react-bootstrap'
import WithdrawCard from "../components/utils/WithdrawCard";
import DepositCard from "../components/utils/DepositCard";
import TransferCard from "../components/utils/TransferCard";
import PrimaryBalanceCard from "../components/utils/PrimaryBalanceCard"
import SavingsBalanceCard from "../components/utils/SavingsBalanceCard"
import LoaderCard from '../components/utils/LoaderCard'
import MessageCard from '../components/utils/MessageCard'
import { getUserDetails } from '../actions/userActions'

const Home =({ history }) => {
  const [username, setUsername] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [primaryAccountNumber, setPrimaryAccountNumber] = useState('')
  const [primaryAccountBalance, setPrimaryAccountBalance] = useState('')
  const [savingsAccountNumber, setSavingsAccountNumber] = useState('')
  const [savingsAccountBalance, setSavingsAccountBalance] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userDetails = useSelector(state => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

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
        setPrimaryAccountNumber(user.data.primaryAccountId.primaryAccountNumber)
        setPrimaryAccountBalance(user.data.primaryAccountId.accountBalance)
        setSavingsAccountNumber(user.data.savingsAccountId.savingsAccountNumber)
        setSavingsAccountBalance(user.data.savingsAccountId.accountBalance)
      }
    }
  }, [dispatch, history, userInfo, user])

  // const submitHandler = (e) => {
  //   e.preventDefault()
  //   if (password !== confirmPassword) {
  //     setMessage('Passwords do not match')
  //   } else {
  //     // dispatch(getUserDetails(username, firstname, lastname, email, phone, password))
  //     // DISPATCH UPDATE PROFILE
  //   }
  // }


  return (
    <>
      {message && <MessageCard variant='danger'>{message}</MessageCard>}
      {error && <MessageCard variant='danger'>{error}</MessageCard>}
      {loading && <LoaderCard />}
      <h5 class="mt-5 mb-5">
        {/* <>Welcome, {userInfo.data.firstname} {userInfo.data.lastname} </> */}
      </h5>
      <Row className="mb-5">
        <PrimaryBalanceCard primaryAccountNumber={primaryAccountNumber} primaryAccountBalance={primaryAccountBalance}/>

        <SavingsBalanceCard savingsAccountNumber={savingsAccountNumber} savingsAccountBalance={savingsAccountBalance}/>
      </Row>

      <Row>

        <DepositCard />
        <WithdrawCard />
        <TransferCard />
      </Row>
    </>
  )
}

export default Home
