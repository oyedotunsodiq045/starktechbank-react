import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav } from 'react-bootstrap'

const Header = () => {
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
							<LinkContainer className="border border-info rounded" to="/signup">
								<Nav.Link>Get started</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				{/* </Container> */}
			</Navbar>
		</header>
	)
}

export default Header
