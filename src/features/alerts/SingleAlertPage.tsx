import { useParams, Link } from "react-router-dom"
import { selectAlertById } from "./alertsSlice"
import { useAppSelector } from "@/app/hooks"
import { Card, Container, Row } from "react-bootstrap"

export const SingleAlertPage = () => {
  const { alertId } = useParams()

  const alert = useAppSelector(selectAlertById)

  if (!alert) {
    return <Container></Container>
  }

  return (
    <Container>
      <Row>
        <Card
          bg={"dark"}
          key={alert.variant}
          border={alert.variant}
          text={alert.variant.toLowerCase() === "light" ? "dark" : "white"}
          style={{ width: "100%", borderWidth: "1px" }}
          className="mt-5 col-md-12 me-2 shadow-lg"
        >
          <Card.Header
            style={{
              borderBottom: "0.5px solid #ccc",
              backgroundColor: "#272b2f",
            }}
          >
            <Card.Title>{alert.title} </Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>{alert.content.substring(0, 100)}</Card.Text>
            <Link to={`/editAlert/${alert.id}`} className="button">
              Edit Alert
            </Link>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  )
}
