import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCampusThunk } from "../reducers/campusesReducer";

class UpdateCampus extends Component {
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

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    // console.log(this.state, 'addcampus');
  }

  async handleSubmit(event) {
    try {
      event.preventDefault();
      console.log("state in updateCampus", this.state);

      console.log(
        this.props.selectedCampus.students,
        "selected campus students"
      );

      const newState = {
        ...this.state,
        id: this.props.selectedCampus.id,
        students: this.props.selectedCampus.students
      };

      delete newState.error;

      await this.props.updateSingleCampus(newState);

      this.setState({
        name: "",
        address: "",
        imageUrl: "",
        description: ""
      });
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
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          // value={this.state.name}
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          onChange={this.handleChange}
          // value={this.state.address}
        />
        <label htmlFor="imageUrl">ImageUrl</label>
        <input
          type="text"
          name="imageUrl"
          onChange={this.handleChange}
          // value={this.state.imageUrl}
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          onChange={this.handleChange}
          // value={this.state.description}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateSingleCampus: campus => dispatch(updateCampusThunk(campus))
  };
};

const mapStateToProps = state => {
  return {
    selectedCampus: state.campuses.selectedCampus
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateCampus);
