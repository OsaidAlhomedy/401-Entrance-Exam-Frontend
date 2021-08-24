import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Card, Row, Button, Col } from "react-bootstrap";
import FlowerCard from "./FlowerCard";
import { withAuth0 } from "@auth0/auth0-react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flowerArr: [],
    };
  }

  getFlowerData = async () => {
    await axios
      .get(`${process.env.REACT_APP_SERVER}/getFlowers`)
      .then((result) => {
        this.setState({ flowerArr: result.data });
        console.log(this.state.flowerArr);
      })
      .catch((err) => {
        this.setState({ err: err });
      });
  };

  componentDidMount() {
    this.getFlowerData();
  }

  addFavFlower = (name, img, desc) => {
    const { user } = this.props.auth0;
    const flowerData = {
      email: user.email,
      name: name,
      img: img,
      description: desc,
    };

    axios
      .post(`${process.env.REACT_APP_SERVER}/addFlower`, flowerData)
      .then((result) => {
        console.log(result.status);
      });
  };

  render() {
    return (
      <>
        <Row>
          <h1>API Flowers</h1>
        </Row>
        <Row xs={3}>
          <Col>
            {this.state.flowerArr &&
              this.state.flowerArr.map((item) => {
                return (
                  <FlowerCard
                    name={item.name}
                    img={item.photo}
                    description={item.instructions}
                    addFavFlower={this.addFavFlower}
                  />
                );
              })}
          </Col>
        </Row>
      </>
    );
  }
}

export default withAuth0(Home);
