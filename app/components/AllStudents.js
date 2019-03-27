import React, { Component } from "react";
import { connect } from "react-redux";
import { getStudents } from "../reducers/studentsReducer";

class AllStudents extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    console.log("CDM students");
    await this.props.loadAllStudents();
  }

  render() {
    const students = this.props.students;
    console.log(this.props, "studentprops");
    console.log(students, "*********");
    return (
      <div id="all-students">
        <h1>All Students</h1>
        <ul>
          {students.map(student => {
            return (
              <li key={student.id}>
                <div>
                  <h2>
                    {student.firstName} {student.lastName}
                  </h2>
                </div>
              </li>
            );
          })}
        </ul>
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
