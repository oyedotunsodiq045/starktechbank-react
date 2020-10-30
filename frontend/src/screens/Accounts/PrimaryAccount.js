import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Table } from 'react-bootstrap'
import PrimaryBalanceCard from "../../components/utils/PrimaryBalanceCard";
import { listPrimaryAccounts } from '../../actions/primaryAccountActions'
import LoaderCard from '../../components/utils/LoaderCard';
import MessageCard from '../../components/utils/MessageCard';

const PrimaryAccount = () => {
  const dispatch = useDispatch()

  const primaryAccountList = useSelector(state => state.primaryAccountList)
  const { loading, error, primaryAccounts } = primaryAccountList

  useEffect(() => {
    dispatch(listPrimaryAccounts())
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
              {primaryAccounts.map(primaryAccount => (
                <PrimaryBalanceCard primaryAccount={primaryAccount} />
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

export default PrimaryAccount
