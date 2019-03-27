/* eslint-disable quotes */
import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { createCampus } from "../reducers/campusesReducer";

class AddCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      imageUrl: "",
      address: "",
      description: "",
      error: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    await this.props.loadAllCampuses();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    // console.log(this.state, 'addcampus');
  }

  async handleSubmit(event) {
    try {
      event.preventDefault();
      console.log("state in addcampus", this.state);

      const newState = { ...this.state };
      if (this.state.imageUrl === "") {
        delete newState.imageUrl;
      }
      delete newState.error;

      await this.props.addSingleCampus(newState);

      this.setState({
        name: "",
        address: "",
        imageUrl: "",
        description: ""
      });
      this.props.history.push("/campuses/");
    } catch (error) {
      this.setState({
        error
      });
      console.error(error.message);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" onChange={this.handleChange} />
        <label htmlFor="address">Address</label>
        <input type="text" name="address" onChange={this.handleChange} />
        <label htmlFor="imageUrl">ImageUrl</label>
        <input type="text" name="imageUrl" onChange={this.handleChange} />
        <label htmlFor="description">Description</label>
        <textarea name="description" onChange={this.handleChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addSingleCampus: campus => dispatch(createCampus(campus))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddCampus);
