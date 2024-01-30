import { Navbar, Container, Nav, NavItem, NavLink } from "react-bootstrap";
import { Button } from "react-bootstrap";
import logo from '@/assets/logo_s.png';

export function NavBar() {
    return (
        <Navbar bg="light" expand="md">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo.src} width="40" height="40" />
                    <span style={{ marginLeft: "1.5rem" }}>DSOJ</span>
                </Navbar.Brand>

                <Navbar.Toggle />

                <Navbar.Collapse>
                    <Nav>
                        {/* TODO: Add NavItem color by checking path */}
                        <NavItem>
                            <NavLink href="/">Overview</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/problem">Problems</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">My Submissions</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Support</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">About</NavLink>
                        </NavItem>
                    </Nav>
                    <Button variant="primary">Login</Button>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}