import React, { Component } from "react";

class StudentList extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(studentId) {
    this.props.history.push(`/students/${studentId}`);
  }

  render() {
    const { students } = this.props;
    return (
      <ul>
        {students.map(student => {
          return (
            <li key={student.id} onClick={() => this.handleClick(student.id)}>
              <div>
                <h2>
                  {student.firstName} {student.lastName}
                </h2>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default StudentList;
