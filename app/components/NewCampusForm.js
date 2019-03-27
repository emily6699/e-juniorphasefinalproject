import React, { Component } from "react";
import axios from "axios";

export default class NewCampusForm extends Component {
  state = {
    name: "",
    address: "",
    description: ""
  };

  componentDidMount() {
    if (this.props.campus) {
      const { name, address, description } = this.props.campus;
      this.setState({ name, address, description });
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    if (this.props.campus) {
      // modify campus
      this.props.update(this.props.campus, {
        name: event.target.name.value,
        address: event.target.address.value,
        description: event.target.description.value
      });
    } else {
      await axios.post("/api/campuses", this.state);
      this.props.history.push("/campuses");
    }
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            required
            type="text"
            name="address"
            placeholder="Address"
            value={this.state.address}
            onChange={this.handleChange}
          />
          <input
            required
            type="textarea"
            name="description"
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
