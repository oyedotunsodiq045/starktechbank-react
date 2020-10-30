import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav } from 'react-bootstrap'
import { logout } from '../actions/userActions'

const Header = () => {
	const dispatch = useDispatch()

	const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect fixed="top">
				{/* <Container> */}
					<LinkContainer to="/">
						<Navbar.Brand>StarkTechBank</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							{userInfo ? (
								<LinkContainer className="border border-info rounded" to="/" onClick={logoutHandler}>
									<Nav.Link>Logout</Nav.Link>
								</LinkContainer>
								) : 
								<LinkContainer className="border border-info rounded" to="/signup">
									<Nav.Link>Get started</Nav.Link>
								</LinkContainer>
							}
							
						</Nav>
					</Navbar.Collapse>
				{/* </Container> */}
			</Navbar>
		</header>
	)
}

export default Header
