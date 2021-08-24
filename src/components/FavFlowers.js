import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import FavFlowerCard from "./FavFlowerCard";
import UpdateModal from "./UpdateModal";

class FavFlowers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
    };
  }

  getFavFlowerData = async () => {
    const { user } = this.props.auth0;
    await axios
      .get(`${process.env.REACT_APP_SERVER}/getFavFlowers?email=${user.email}`)
      .then((result) => {
        this.setState({ favFlowerArr: result.data });
        console.log(this.state.favFlowerArr);
      })
      .catch((err) => {
        this.setState({ err: err });
      });
  };

  componentDidMount() {
    this.getFavFlowerData();
  }

  deleteFavFlower = (id) => {
    const { user } = this.props.auth0;
    axios
      .delete(
        `${process.env.REACT_APP_SERVER}/deleteFavFlowers/${id}?email=${user.email}`
      )
      .then((result) => {
        this.setState({ favFlowerArr: result.data });
      })
      .catch((err) => {
        this.setState({ err: err });
      });
  };

  showUpdateModal = (id, name, img, description) => {
    this.setState({
      updateData: {
        id: id,
        name: name,
        img: img,
        description: description,
      },
      modalShow: true,
    });
  };

  hideUpdateModal = () => {
    this.setState({
      modalShow: false,
    });
  };

  updateFlowerData = (e) => {
    e.preventDefault();
    const { user } = this.props.auth0;
    const updatedData = {
      email: user.email,
      name: e.target.name.value,
      img: e.target.image.value,
      description: e.target.desc.value,
    };

    axios
      .put(
        `${process.env.REACT_APP_SERVER}/updateFavFlowers/${this.state.updateData.id}`,
        updatedData
      )
      .then((result) => {
        this.setState({ favFlowerArr: result.data });
      });
  };

  render() {
    return (
      <>
        <Row>
          <h1>My Favorite Flowers</h1>
        </Row>
        <Row xs={3}>
          <Col>
            {this.state.favFlowerArr &&
              this.state.favFlowerArr.map((item) => {
                return (
                  <FavFlowerCard
                    id={item._id}
                    name={item.name}
                    img={item.img}
                    description={item.description}
                    deleteFavFlower={this.deleteFavFlower}
                    showUpdateModal={this.showUpdateModal}
                  />
                );
              })}
          </Col>
        </Row>
        <>
          {this.state.updateData && (
            <UpdateModal
              show={this.state.modalShow}
              hideUpdateModal={this.hideUpdateModal}
              updateData={this.state.updateData}
              updateFlowerData={this.updateFlowerData}
            />
          )}
        </>
      </>
    );
  }
}

export default withAuth0(FavFlowers);
