import React, { Component } from "react";
import { Card, Row, Button } from "react-bootstrap";

export class FavFlowerCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={this.props.img} />
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Button
            onClick={() => this.props.deleteFavFlower(this.props.id)}
            variant="danger"
          >
            Delete
          </Button>
          <Button
            onClick={() =>
              this.props.showUpdateModal(
                this.props.id,
                this.props.name,
                this.props.img,
                this.props.description
              )
            }
            variant="warning"
          >
            Update
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default FavFlowerCard;
