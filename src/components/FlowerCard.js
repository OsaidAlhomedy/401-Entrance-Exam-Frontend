import React, { Component } from "react";
import { Card, Row, Button } from "react-bootstrap";

export class FlowerCard extends Component {
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
            onClick={() =>
              this.props.addFavFlower(
                this.props.name,
                this.props.img,
                this.props.description
              )
            }
            variant="primary"
          >
            Add to Favorite
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default FlowerCard;
