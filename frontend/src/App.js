import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import PrimaryAccount from './screens/Accounts/PrimaryAccount'
import SavingsAccount from './screens/Accounts/SavingsAccount'
import ForgotPassword from './screens/Auth/ForgotPassword'
import Profile from './screens/Auth/Profile'
import SignIn from './screens/Auth/SignIn'
import SignUp from './screens/Auth/SignUp'
import Deposit from './screens/Transactions/Deposit'
import Withdraw from './screens/Transactions/Withdraw'
import Between from './screens/Transfer/Between'
import To from './screens/Transfer/To'
import Appointment from './screens/Appointment'
import Home from './screens/Home'
import Recipient from './screens/Recipient'

const App = () => {
	return (
		<Router>
			<Header />
			<NavBar />
			<br /><br /><br /><br />
			<main className='py-3'>
				<Container>
					<Route path="/" component={SignIn} exact />
					<Route path="/signup" component={SignUp} />
					<Route path="/home" component={Home} />
					<Route path="/profile" component={Profile} />
					<Route path="/forgot-password" component={ForgotPassword} />
					<Route path="/transactions/deposit" component={Deposit} />
					<Route path="/transactions/withdraw" component={Withdraw} />
					<Route path="/recipient" component={Recipient} />
					<Route path="/account/primary" component={PrimaryAccount} />
					<Route path="/account/savings" component={SavingsAccount} />
					<Route path="/transfer/between" component={Between} />
					<Route path="/transfer/to" component={To} />
					<Route path="/appointment" component={Appointment} />
				</Container>
			</main>
			<Footer />
		</Router>
	)
}

export default App
