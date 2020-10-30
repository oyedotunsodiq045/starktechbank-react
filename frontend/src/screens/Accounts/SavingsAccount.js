import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Table } from 'react-bootstrap'
import SavingsBalanceCard from "../../components/utils/SavingsBalanceCard";
import { listSavingsAccounts } from '../../actions/savingsAccountActions'
import LoaderCard from '../../components/utils/LoaderCard';
import MessageCard from '../../components/utils/MessageCard';

const SavingsAccount = () => {
  const dispatch = useDispatch()
  
  const savingsAccountList = useSelector(state => state.savingsAccountList)
  const { loading, error, savingsAccounts } = savingsAccountList

  useEffect(() => {
    dispatch(listSavingsAccounts())
  }, [dispatch])

  return (
    <>
      {loading ? (
        <LoaderCard />
        ) : error ? (
          <MessageCard variant='danger'>{error}</MessageCard>
        ) : ( 
          <>
            <Row className="mt-5 mb-5 justify-content-end">
              {savingsAccounts.map(savingsAccount => (
                <SavingsBalanceCard savingsAccount={savingsAccount} />
              ))}
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
