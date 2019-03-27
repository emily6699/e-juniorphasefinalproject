/* eslint-disable quotes */
import React, { Component } from "react";
import { connect } from "react-redux";
import { getStudent, updateStudent } from "../actions/action-creators";
import Student from "./Student";
import NewStudentForm from "./NewStudentForm";

class SingleStudent extends Component {
  componentDidMount() {
    const id = Number(this.props.match.params.id);
    this.props.getStudent(id);
  }

  handleUpdate = (student, newVals) => {
    this.props.updateStudent(student, newVals);
  };

  render() {
    const { student } = this.props;
    if (this.props.err) {
      return <h1>No such student found</h1>;
    }
    if (this.props.isLoading) return <h1>LOADING...</h1>;
    return (
      <div>
        <Student student={student} />
        <NewStudentForm student={student} update={this.handleUpdate} />
      </div>
    );
  }
}

const mstp = state => ({
  student: state.students.student,
  err: state.students.error,
  isLoading: state.students.isLoading
});

export default connect(
  mstp,
  { getStudent, updateStudent }
)(SingleStudent);
