import React, { Component } from "react";
import { connect } from "react-redux";
import { updateStudentThunk } from "../reducers/studentsReducer";

class UpdateStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      imageUrl: "",
      gpa: 0.0,
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
      console.log("state in updateStudent", this.state);

      const newState = {
        ...this.state,
        id: this.props.selectedStudent.id,
        campusId: this.props.selectedStudent.campusId,
        campus: this.props.selectedStudent.campus
      };

      delete newState.error;

      await this.props.updateSingleStudent(newState);

      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        imageUrl: "",
        gpa: 0.0
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
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateSingleStudent: student => dispatch(updateStudentThunk(student))
  };
};

const mapStateToProps = state => {
  return {
    selectedStudent: state.students.selectedStudent
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateStudent);
