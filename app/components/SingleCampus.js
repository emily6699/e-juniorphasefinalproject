/* eslint-disable quotes */
import React, { Component } from "react";
import { connect } from "react-redux";
import { getCampus, updateCampus } from "../actions/action-creators";
import Campus from "./Campus";
import { Link, withRouter } from "react-router-dom";
import NewCampusForm from "./NewCampusForm";

class SingleCampus extends Component {
  componentDidMount() {
    try {
      const id = Number(this.props.match.params.id);
      this.props.getCampus(id);
    } catch (err) {
      console.log("ERR IS: ", err);
    }
  }

  handleUpdate = (campus, newVals) => {
    this.props.updateCampus(campus, newVals);
  };

  students = () => {
    if (this.props.campus) {
      if (this.props.campus.students) {
        const { students } = this.props.campus;
        return students.map(student => (
          <div key={student.id}>
            <Link to={`/students/${student.id}`}>
              <h3>
                {student.firstname} {student.lastname}
              </h3>
            </Link>
          </div>
        ));
      }
    }
    return <h1>No available students</h1>;
  };

  render() {
    const { campus } = this.props;
    if (this.props.err) {
      return <h1>No such campus found</h1>;
    }
    if (this.props.isLoading) return <h1>LOADING...</h1>;
    return (
      <div>
        {campus ? <Campus campus={campus} /> : "No such campus"}
        <div>{this.students()}</div>
        <NewCampusForm campus={campus} update={this.handleUpdate} />
        <br />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  err: state.campuses.error,
  isLoading: state.campuses.isLoading,
  campus: state.campuses.campus
});

export default withRouter(
  connect(
    mapStateToProps,
    { getCampus, updateCampus }
  )(SingleCampus)
);
