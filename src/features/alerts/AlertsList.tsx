import { useAppSelector } from "@/app/hooks"
import { Card, Container, Row } from "react-bootstrap"

export const AlertsList = () => {
  const alerts = useAppSelector(state => state.alerts)

  const renderedAlerts = alerts.map(alert => (
    <Card
      bg={"dark"}
      key={alert.variant}
      border={alert.variant}
      text={alert.variant.toLowerCase() === "light" ? "dark" : "white"}
      style={{ width: "18rem", borderWidth: "1px" }}
      className="mb-2 col-md-3 me-2 shadow-lg"
    >
      <Card.Header
        style={{ borderBottom: "0.5px solid #ccc", backgroundColor: "#272b2f" }}
      >
        <Card.Title>{alert.title} </Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>{alert.content.substring(0, 100)}</Card.Text>
      </Card.Body>
    </Card>
  ))

  return (
    <Container className="alerts-list bg-body">
      <h3>Alerts</h3>
      <Row>{renderedAlerts}</Row>
    </Container>
  )
}
