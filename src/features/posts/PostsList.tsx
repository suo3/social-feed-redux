import { useAppSelector } from "@/app/hooks"
import { Card, Container, Row } from "react-bootstrap"

export const PostsList = () => {
  const posts = useAppSelector(state => state.posts)

  const renderedPosts = posts.map(post => (
    <Card
      bg="dark"
      key={post.variant}
      border={post.variant}
      text={post.variant.toLowerCase() === "light" ? "dark" : "white"}
      style={{ width: "18rem", borderWidth: "2px" }}
      className="mb-2 col-md-3 me-2"
    >
      <Card.Header
        style={{ borderBottom: "0.5px solid #ccc", backgroundColor: "#272b2f" }}
      >
        <Card.Title>{post.title} </Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>{post.content.substring(0, 100)}</Card.Text>
      </Card.Body>
    </Card>
  ))

  return (
    <Container className="posts-list">
      <h3>Posts</h3>
      <Row>{renderedPosts}</Row>
    </Container>
  )
}
