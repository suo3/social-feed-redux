import React from "react"
import { Container, Row, Form, Button } from "react-bootstrap"

interface AddPostFormFields extends HTMLFormControlsCollection {
  postTitle: HTMLInputElement
  postContent: HTMLTextAreaElement
}

interface AddPostFormElements extends HTMLFormElement {
  readonly elements: AddPostFormFields
}

export const AddPostForm = () => {
  const handleSubmit = (e: React.FormEvent<AddPostFormElements>) => {
    e.preventDefault()

    const { elements } = e.currentTarget
    const title = elements.postTitle.value
    const content = elements.postContent.value

    console.log("Values: ", { title, content })

    e.currentTarget.reset()
  }

  return (
    <Container>
      <Row>
        <h3>Add a New Post</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 text-left">
            <Form.Label htmlFor="postTitle">Post Title</Form.Label>
            <Form.Control type="text" id="postTitle" defaultValue="" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Content</Form.Label>
            <Form.Control
              type="textarea"
              as="textarea"
              rows={3}
              id="postContent"
              name="postContent"
              defaultValue=""
              required
            />
          </Form.Group>

          <Button>Save Post</Button>
        </Form>
      </Row>
    </Container>
  )
}
