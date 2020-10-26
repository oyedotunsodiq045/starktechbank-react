import React, { useState, useEffect } from 'react'
// import { LinkContainer } from 'react-router-bootstrap'
import { Row } from 'react-bootstrap'
// import PrimaryAccountCard from "../components/utils/PrimaryAccountCard";
// import SavingsAccountCard from "../components/utils/SavingsAccountCard";
import WithdrawCard from "../components/utils/WithdrawCard";
import DepositCard from "../components/utils/DepositCard";
import TransferCard from "../components/utils/TransferCard";
import PrimaryBalanceCard from "../components/utils/PrimaryBalanceCard";
import SavingsBalanceCard from "../components/utils/SavingsBalanceCard";
import axios from 'axios'

const Home = () => {
  const [primaryAccounts, setPrimaryAccounts] = useState([])
  const [savingsAccounts, setSavingsAccounts] = useState([])

  useEffect(() => {
    const fetchPrimaryAccounts = async () => {
      const { data } = await axios.get('/api/primary-accounts')

      setPrimaryAccounts(data)
    }
    
    const fetchSavingsAccounts = async () => {
      const { data } = await axios.get('/api/savings-accounts')

      setSavingsAccounts(data)
    }

    fetchPrimaryAccounts()
    fetchSavingsAccounts()
  }, [])
  return (
    <>
      <Row className="mt-5 mb-5">
        {primaryAccounts.map(primaryAccount => (
          <PrimaryBalanceCard primaryAccount={primaryAccount} />
        ))}

        {savingsAccounts.map(savingsAccount => (
          <SavingsBalanceCard savingsAccount={savingsAccount} />
        ))}
      </Row>

      <Row>
        {/* {primaryAccounts.map(primaryAccount => (
          <PrimaryAccountCard primaryAccount={primaryAccount} />
        ))}

        {savingsAccounts.map(savingsAccount => (
          <SavingsAccountCard savingsAccount={savingsAccount} />
        ))} */}

        <DepositCard />
        <WithdrawCard />
        <TransferCard />
      </Row>
    </>
  )
}

export default Home
