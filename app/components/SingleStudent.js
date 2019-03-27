/* eslint-disable quotes */
import React, { Component } from "react";
import { connect } from "react-redux";
import { getSingleStudent } from "../reducers/studentsReducer";

class SingleStudent extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    console.log("CDM singleStudent");
    await this.props.loadSingleStudent(this.props.match.params.studentId);
  }

  handleClick(campusId) {
    this.props.history.push(`/campuses/${campusId}`);
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      imageUrl,
      gpa,
      campus
    } = this.props.student;
    console.log(this.props.student);
    return (
      <div>
        <h2>
          {firstName} {lastName}
        </h2>
        <div>
          <img src={imageUrl} />
        </div>
        <h3>{email}</h3>
        <h3>{gpa}</h3>
        <h3>Campus</h3>
        {campus ? (
          <div>
            <h2 onClick={() => this.handleClick(campus.id)}>{campus.name}</h2>
          </div>
        ) : (
          `${firstName} ${lastName} is not currently assigned to a campus: feel free to assign one!`
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadSingleStudent: studentId => dispatch(getSingleStudent(studentId))
  };
};

const mapStateToProps = state => {
  return {
    student: state.students.selectedStudent
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleStudent);
