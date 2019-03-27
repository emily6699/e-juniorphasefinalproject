/* eslint-disable quotes */
import React, { Component } from "react";
import { connect } from "react-redux";
import { getStudents, removeStudentThunk } from "../reducers/studentsReducer";
import AddStudent from "./AddStudent";
import UpdateStudent from "./UpdateStudent";
import { NavLink, Route } from "react-router-dom";

class AllStudents extends Component {
  constructor(props) {
    super(props);
    this.changeToAdd = this.changeToAdd.bind(this);
  }

  async componentDidMount() {
    console.log("CDM students");
    await this.props.loadAllStudents();
  }
  changeToAdd() {
    this.props.history.push(`/students/add`);
  }

  handleClick(studentId) {
    this.props.history.push(`/students/${studentId}`);
  }

  removeStudent(studentId) {
    this.props.deleteStudent(studentId);
  }

  render() {
    const students = this.props.students;
    console.log(this.props, "studentprops");
    console.log(students, "*********");
    return (
      <div id="all-students">
        <span>
          <h1>All Students</h1>
          <button type="button" onClick={this.changeToAdd}>
            +
          </button>
        </span>
        {students && students.length > 0 ? (
          <ul>
            {students.map(student => {
              return (
                <div key={student.id}>
                  <li onClick={() => this.handleClick(student.id)}>
                    <div>
                      <h2>
                        {student.firstName} {student.lastName}
                      </h2>
                    </div>
                  </li>
                  <button
                    type="button"
                    onClick={() => this.removeStudent(student.id)}
                  >
                    X
                  </button>
                </div>
              );
            })}
          </ul>
        ) : (
          "No STUDENT.PLEASE ADD. :)"
        )}
        <UpdateStudent />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("mstp students", state);
  return {
    students: state.students.studentList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadAllStudents: () => dispatch(getStudents()),
    deleteStudent: studentId => dispatch(removeStudentThunk(studentId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllStudents);
