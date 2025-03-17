import React from "react"
import { useState } from "react"
import { Container, Row, Form, Button } from "react-bootstrap"
import { nanoid } from "@reduxjs/toolkit"
import { useAppDispatch } from "@/app/hooks"
import { type Alert, alertAdded } from "./alertsSlice"

interface AddAlertFormFields extends HTMLFormControlsCollection {
  alertTitle: HTMLInputElement
  alertContent: HTMLTextAreaElement
  variant: HTMLSelectElement
}

interface AddAlertFormElements extends HTMLFormElement {
  readonly elements: AddAlertFormFields
}

export const AddAlertForm = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useAppDispatch()

  const handleSubmit = (e: React.FormEvent<AddAlertFormElements>) => {
    e.preventDefault()

    const { elements } = e.currentTarget
    const title = elements.alertTitle.value
    const content = elements.alertContent.value
    const variant = elements.variant.value

    const newAlert: Alert = {
      id: nanoid(),
      title,
      content,
      variant,
    }
    dispatch(alertAdded(newAlert))
    e.currentTarget.reset()
  }

  return (
    <Container>
      <Row>
        <Button
          className="my-5"
          variant="secondary"
          onClick={() => {
            setOpen(!open)
          }}
        >
          Add New Alert
        </Button>
      </Row>
      <Row hidden={!open}>
        <h3 className="text-left my-2">Add a New Alert</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 text-left">
            <Form.Control
              type="text"
              placeholder="Alert title here"
              id="alertTitle"
              defaultValue=""
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Select aria-label="Default select example" id="variant">
              <option>Select Type</option>
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
              <option value="success">Success</option>
              <option value="danger">Danger</option>
              <option value="warning">Warning</option>
              <option value="info">Info</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="textarea"
              as="textarea"
              placeholder="Add content"
              rows={3}
              id="alertContent"
              name="alertContent"
              defaultValue=""
              required
            />
          </Form.Group>

          <Button className="mb-5" type="submit">
            Save Alert
          </Button>
        </Form>
      </Row>
    </Container>
  )
}
