/* eslint-disable quotes */
import React, { Component } from "react";
import axios from "axios";

export default class NewStudentForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    gpa: 0,
    email: ""
  };

  componentDidMount() {
    if (this.props.student) {
      const { firstName, lastName, gpa, email } = this.props.student;
      this.setState({ firstName, lastName, gpa, email });
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    if (this.props.student) {
      this.props.update(this.props.student, {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        gpa: e.target.gpa.value,
        email: e.target.email.value
      });
    } else {
      await axios.post("/api/students", this.state);
      this.props.history.push("/students");
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
            name="firstName"
            placeholder="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <input
            required
            type="text"
            name="lastName"
            placeholder="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <input
            required
            type="number"
            step="0.1"
            min="0.0"
            max="4.0"
            name="gpa"
            placeholder="GPA"
            value={this.state.gpa}
            onChange={this.handleChange}
          />
          <input
            required
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
