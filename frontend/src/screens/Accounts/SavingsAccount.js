import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Table } from 'react-bootstrap'
import SavingsBalanceCard from "../../components/utils/SavingsBalanceCard";
// import { listSavingsAccounts } from '../../actions/savingsAccountActions'
import LoaderCard from '../../components/utils/LoaderCard'
import MessageCard from '../../components/utils/MessageCard'
import { getUserDetails } from '../../actions/userActions'

const SavingsAccount = ({ history }) => {
  const [savingsAccountNumber, setSavingsAccountNumber] = useState('')
  const [savingsAccountBalance, setSavingsAccountBalance] = useState('')

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
        setSavingsAccountNumber(user.data.savingsAccountId.savingsAccountNumber)
        setSavingsAccountBalance(user.data.savingsAccountId.accountBalance)
      }
    }
  }, [dispatch, history, userInfo, user])

  return (
    <>
      {loading ? (
        <LoaderCard />
        ) : error ? (
          <MessageCard variant='danger'>{error}</MessageCard>
        ) : ( 
          <>
            <Row className="mt-5 mb-5 justify-content-end">
              <SavingsBalanceCard savingsAccountNumber={savingsAccountNumber} savingsAccountBalance={savingsAccountBalance}/>
            </Row>
            <Row>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Amount</th>
                    <th>Balance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>28/10/2020</td>
                    <td>Otto</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Mark</td>
                    <td>Otto</td>
                  </tr>
                  <tr>
                    <td>29/10/2020</td>
                    <td>Otto</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Mark</td>
                    <td>Otto</td>
                  </tr>
                  <tr>
                    <td>30/10/2020</td>
                    <td>Otto</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Mark</td>
                    <td>Otto</td>
                  </tr>
                </tbody>
              </Table>
            </Row> 
          </>
        )
      }      
    </>
  )
}

export default SavingsAccount
