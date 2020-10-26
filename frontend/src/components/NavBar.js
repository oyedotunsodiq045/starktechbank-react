import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

const NavBar = () => {
  return (
    <>
      <Navbar className="mt-5" bg="light" expand="lg" fixed="top">
				<Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

              {/* Profile */}
              <LinkContainer to="/home">
                <Nav.Link>Home</Nav.Link>
				      </LinkContainer>

              {/* Account */}
              <NavDropdown title="Account" id="basic-nav-dropdown">
                <LinkContainer to="/account/primary">
                  <NavDropdown.Item>Primary</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/account/savings">
                 <NavDropdown.Item>Savings</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              {/* Transaction */}
              <NavDropdown title="Transaction" id="basic-nav-dropdown">
                <LinkContainer to="/transactions/primary/deposit">
                  <NavDropdown.Item>Primary Deposit</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/transactions/primary/withdraw">
                 <NavDropdown.Item>Primary Withdrawal</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/transactions/savings/deposit">
                  <NavDropdown.Item>Savings Deposit</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/transactions/savings/withdraw">
                 <NavDropdown.Item>Savings Withdrawal</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              {/* Transfer */}
              <NavDropdown title="Transfer" id="basic-nav-dropdown">
                <LinkContainer to="/transfer/between">
                  <NavDropdown.Item>Between Accounts</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/transfer/to">
                <NavDropdown.Item>To Someone else</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              {/* Appointment */}
              <NavDropdown title="Appointment" id="basic-nav-dropdown">
                <LinkContainer to="/appointment">
                  <NavDropdown.Item>Schedule an appointment</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              {/* Recipient */}
              <NavDropdown title="Beneficiary" id="basic-nav-dropdown">
                <LinkContainer to="/recipient">
                 <NavDropdown.Item>Add/Edit Beneficiary</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

            </Nav>
            <Nav>

              {/* Profile */}
              <NavDropdown title="Me" id="basic-nav-dropdown">
                <LinkContainer to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/logout">
                 <NavDropdown.Item>Logout</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
				</Container>
      </Navbar>
    </>
  )
}

export default NavBar
