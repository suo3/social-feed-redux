import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Form, Button, Container, Card } from "react-bootstrap"
import { useAppSelector, useAppDispatch } from "@/app/hooks"
import { alertUpdated, selectAlertById } from "./alertsSlice"

interface EditAlertFormElements {
  elements: any
}

export const EditAlertForm = () => {
  const { alertId } = useParams()

  const alert = useAppSelector(state => selectAlertById(state, alertId!))

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  if (!alert) {
    return (
      <section>
        <h2>Alert not found!</h2>
      </section>
    )
  }

  const onSaveAlertClicked = (e: React.FormEvent<EditAlertFormElements>) => {
    // Prevent server submission
    e.preventDefault()

    const { elements } = e.currentTarget
    const title = elements.alertTitle.value
    const content = elements.alertContent.value
    const variant = elements.alertVariant.value

    if (title && content) {
      dispatch(alertUpdated({ id: alert.id, title, content, variant }))
      navigate(`/alerts/${alertId}`)
    }
  }

  return (
    <Container className="text-white mt-3">
      <Card className="p-4">
        <h2>Edit Alert</h2>
        <Form onSubmit={onSaveAlertClicked}>
          <label htmlFor="alertTitle">Alert Title:</label>
          <input
            type="text"
            id="alertTitle"
            className="form-control mb-2 text-left"
            name="alertTitle"
            defaultValue={alert.title}
            required
          />
          <label htmlFor="alertVariant">Alert Type</label>
          <input
            type="text"
            id="alertVariant"
            className="form-control mb-2 text-left"
            name="alertVariant"
            defaultValue={alert.variant}
            required
          />
          <label htmlFor="alertContent">Content:</label>
          <textarea
            id="alertContent"
            className="form-control"
            name="alertContent"
            defaultValue={alert.content}
            required
          />
          <Button type="submit" className="mt-3">
            Save Alert
          </Button>
        </Form>
      </Card>
    </Container>
  )
}
