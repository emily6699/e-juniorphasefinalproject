import React, { Component } from "react";
import axios from "axios";

export default class NewStudentForm extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: ""
  };

  componentDidMount() {
    if (this.props.student) {
      const { firstname, lastname, email } = this.props.student;
      this.setState({ firstname, lastname, email });
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    if (this.props.student) {
      this.props.update(this.props.student, {
        firstname: e.target.firstname.value,
        lastname: e.target.lastname.value,
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
            name="firstname"
            placeholder="Firstname"
            value={this.state.firstname}
            onChange={this.handleChange}
          />
          <input
            required
            type="text"
            name="lastname"
            placeholder="Lastname"
            value={this.state.lastname}
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
