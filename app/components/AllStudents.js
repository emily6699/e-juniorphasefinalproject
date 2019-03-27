import React, { Component } from "react";
import { connect } from "react-redux";
import { getStudents } from "../reducers/studentsReducer";
import StudentList from "./StudentList";
import AddStudent from './AddStudent';

class AllStudents extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    console.log("CDM students");
    await this.props.loadAllStudents();
  }

  handleClick(studentId) {
    this.props.history.push(`/students/${studentId}`);
  }

  render() {
    const students = this.props.students;
    console.log(this.props, "studentprops");
    console.log(students, "*********");
    return (
      <div id="all-students">
        <span>
          <h1>All Students</h1>
          <AddStudent />
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
                </div>
              );
            })}
          </ul>
          <StudentList students={students} history={this.props.history} />
        ) : (
          "NO STUDENT. PLEASE ADD. :)"
        )}
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
    loadAllStudents: () => dispatch(getStudents())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllStudents);
