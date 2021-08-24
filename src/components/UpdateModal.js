import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export class UpdateModal extends Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.hideUpdateModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => this.props.updateFlowerData(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Flower Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                defaultValue={this.props.updateData.name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Flower Image</Form.Label>
              <Form.Control
                type="text"
                name="image"
                defaultValue={this.props.updateData.img}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Flower Description</Form.Label>
              <Form.Control
                type="text"
                name="desc"
                defaultValue={this.props.updateData.description}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default UpdateModal;
