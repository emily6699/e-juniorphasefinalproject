import React, { Component } from "react";
import { connect } from "react-redux";
import { getSingleCampus } from "../reducers/campusesReducer";

class SingleCampus extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    console.log("CDM singleCampus");
    await this.props.loadSingleCampus(this.props.match.params.campusId);
  }

  handleClick(studentId) {
    this.props.history.push(`/students/${studentId}`);
  }

  render() {
    const { name, imageUrl, description, students } = this.props.campus;
    console.log(this.props.campus);
    return (
      <div>
        <h2>{name}</h2>
        <div>
          <img src={imageUrl} />
        </div>
        <h3>{description}</h3>
        <h3>Students</h3>
        {students ? (
          <ul>
            {students.map(student => {
              return (
                <li key={student.id}>
                  <div>
                    <h2 onClick={() => this.handleClick(student.id)}>
                      {student.firstName} {student.lastName}
                    </h2>
                  </div>
                </li>
              );
            })}
          </ul>
           <StudentList students={students} history={this.props.history} />
        ) : (
          `${name} campus currently has no students: feel free to add one!`
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadSingleCampus: campusId => dispatch(getSingleCampus(campusId))
  };
};

const mapStateToProps = state => {
  return {
    campus: state.campuses.selectedCampus
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCampus);
