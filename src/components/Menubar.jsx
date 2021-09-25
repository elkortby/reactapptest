import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Menubar() {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand>
					<Link className="link" to="/">
						NIJARA
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto"></Nav>
					<Nav>
						<Link className="link" to="/auth">Sign up</Link>
						<Link className="link" to="/about">About</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
