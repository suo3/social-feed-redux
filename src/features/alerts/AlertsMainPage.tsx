import { AlertsList } from "./AlertsList"
import { Container } from "react-bootstrap"
import { AddAlertForm } from "./AddAlertForm"

export const AlertsMainPage = () => {
  return (
    <Container fluid>
      <AddAlertForm />
      <AlertsList />
    </Container>
  )
}
