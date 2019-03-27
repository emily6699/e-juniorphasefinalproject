/* eslint-disable quotes */
import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { getStudents, deleteStudent } from "../actions/action-creators";
import { Link } from "react-router-dom";

class AllStudents extends Component {
  componentDidMount() {
    this.props.getStudents();
  }

  handleClick = async id => {
    this.props.deleteStudent(id);
  };

  render() {
    if (this.props.isLoading) return <h1>LOADING...</h1>;
    return (
      <div>
        <Link to={"/newstudent"}>Add a student</Link>
        <br />
        Students:
        {this.props.students.map(student => (
          <div key={student.id}>
            <button onClick={() => this.handleClick(student.id)}>X</button>
            <Link to={`students/${student.id}`}>
              <h3>
                {student.firstName} {student.lastName}
              </h3>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToStudent = state => ({
  students: state.students.list,
  isLoading: state.students.isLoading
});

export default connect(
  mapStateToStudent,
  { getStudents, deleteStudent }
)(AllStudents);
