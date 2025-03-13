import { useParams } from "react-router-dom"

import { useAppSelector } from "@/app/hooks"
import { Container, Row } from "react-bootstrap"

export const SingleAlertPage = () => {
  const { alertId } = useParams()

  const alert = useAppSelector(state =>
    state.alerts.find(alert => alert.id === alertId),
  )

  if (!alert) {
    return <Container></Container>
  }

  return (
    <Container>
      <Row>
        <h3>{alert.title}</h3>
        <p>{alert.content}</p>
      </Row>
    </Container>
  )
}
