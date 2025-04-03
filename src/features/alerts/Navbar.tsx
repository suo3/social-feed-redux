import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export const MainNavBar = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Alerts Creator</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="/" className="text-warning fw-bold">
            {" "}
            View All Alerts
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
