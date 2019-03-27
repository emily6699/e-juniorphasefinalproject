/* eslint-disable quotes */
import React, { Component } from "react";
import { connect } from "react-redux";
import { createStudent } from "../reducers/studentsReducer";
import { getCampuses } from "../reducers/campusesReducer";

class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      imageUrl: "",
      campusId: 0,
      gpa: 0.0,
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
      console.log("state in addStudent", this.state);

      const campusId = this.state.campusId;
      const newState = { ...this.state };
      if (this.state.imageUrl === "") {
        delete newState.imageUrl;
      }
      delete newState.error;
      delete newState.campusId;

      const student = {
        state: newState,
        campusId
      };
      await this.props.addSingleStudent(student);

      this.setState({
        name: "",
        address: "",
        firstName: "",
        lastName: "",
        email: "",
        imageUrl: "",
        campusId: 0,
        description: "",
        gpa: 0.0
      });
      this.props.history.push("/students/");
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
        <div id="form">
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" onChange={this.handleChange} />
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" onChange={this.handleChange} />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={this.handleChange} />
          <label htmlFor="imageUrl">ImageUrl</label>
          <input type="text" name="imageUrl" onChange={this.handleChange} />
          <label htmlFor="gpa">GPA</label>
          <input
            type="number"
            name="gpa"
            onChange={this.handleChange}
            step="0.01"
          />
          <label htmlFor="campusId">Campus</label>
          <select type="text" name="campusId" onChange={this.handleChange}>
            {this.props.campuses.map(campus => {
              return (
                <option key={campus.id} value={campus.id}>
                  {campus.name}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    campuses: state.campuses.campusList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadAllCampuses: () => dispatch(getCampuses()),
    addSingleStudent: student => dispatch(createStudent(student))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddStudent);
