import React, { Component } from "react";
import axios from "axios";

export default class NewCampusForm extends Component {
  state = {
    name: "",
    address: ""
  };

  componentDidMount() {
    if (this.props.campus) {
      const { name, address } = this.props.campus;
      this.setState({ name, address });
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    if (this.props.campus) {
      // modify campus
      this.props.update(this.props.campus, {
        name: e.target.name.value,
        address: e.target.address.value
      });
    } else {
      await axios.post("/api/campuses", this.state);
      this.props.history.push("/campuses");
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
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
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
