import React, { useState, useEffect } from 'react'
// import { LinkContainer } from 'react-router-bootstrap'
import { Card, Form, Col, Row } from 'react-bootstrap'
import PrimaryAccountCard from "./../../components/utils/PrimaryAccountCard";
import SavingsAccountCard from "../../components/utils/SavingsAccountCard";
// import DepositCard from "../../components/utils/DepositCard";
// import WithdrawCard from "../../components/utils/WithdrawCard";
// import PrimaryBalanceCard from "../../components/utils/PrimaryBalanceCard";
// import SavingsBalanceCard from "../../components/utils/SavingsBalanceCard";
import axios from 'axios'

const Profile = () => {
  const [users, setUsers] = useState([])
  const [primaryAccounts, setPrimaryAccounts] = useState([])
  const [savingsAccounts, setSavingsAccounts] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get('/api/users')

      setUsers(data)
    }

    const fetchPrimaryAccounts = async () => {
      const { data } = await axios.get('/api/primary-accounts')

      setPrimaryAccounts(data)
    }
    
    const fetchSavingsAccounts = async () => {
      const { data } = await axios.get('/api/savings-accounts')

      setSavingsAccounts(data)
    }

    fetchUsers()
    fetchPrimaryAccounts()
    fetchSavingsAccounts()
  }, [])

  return (
    <>
      <Row className="mt-5 mb-5">

        {users.map(user => (

          <Col md="6">
            <Card>
              <Card.Header className="text-center" as="h5">
                Profile
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Control type="text" placeholder={user.firstname} disabled />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Control type="text" placeholder={user.lastname} disabled />
                    </Form.Group>
                  </Form.Row>
                
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Control type="email" placeholder={user.email} disabled />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Control type="text" placeholder={user.phone} disabled />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Control type="text" placeholder={user.username} disabled />
                    </Form.Group>
                  </Form.Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>

        ))}

        {primaryAccounts.map(primaryAccount => (
          <PrimaryAccountCard primaryAccount={primaryAccount} />
        ))}

        {savingsAccounts.map(savingsAccount => (
          <SavingsAccountCard savingsAccount={savingsAccount} />
        ))}

      </Row>
    </>
  )
}

export default Profile
